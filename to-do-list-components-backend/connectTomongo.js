import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();


import jwt from 'jsonwebtoken';
// const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt';

const app = express();
app.use(express.json());

const { Schema, model } = mongoose;
const url = 'mongodb://localhost:27017/students';
const todoSchema = new Schema({
  task: String,
  email: String,
});
const Todo = model('Todo', todoSchema);

const registerSchema = new Schema({
  email: String,
  password: String,
});
const Register = model('Register', registerSchema);

const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(url);

app.get('/list', async (req, res) => {
  const todoList = await Todo.find({});
  res.send(todoList);
});

app.post('/list', async (req, res) => {
  await Todo.create(req.body, (error, result) => {
    if (error) { res.send(error); }
    else { res.send(result); }
  });
});

app.delete(`/list/:id`, async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.send("Deleted Successed");
});

app.put('/list/:id', async (req, res) => {
  console.log("Make changes in: " + req.params.id);
  console.log(req.body);
  await Todo.findByIdAndUpdate(req.params.id, req.body).then(
    console.log("done with: " + req.params.id))
});




app.get('/register', async (req, res) => {
  console.log("try to register");
  const email = req.query.email;
  const password = req.query.password;
  console.log(email + " " + password)
  const registersList = await Register.find({ email: email });
  if (registersList.length === 0) {
    console.log(">?>?>?")
    res.send("EnterNewUser");
  }
  if (registersList[0]) {
    const exist = bcrypt.compareSync(password, registersList[0].password)
    console.log(exist)
    if (exist) {
      res.send("Success")
    }
  }
});

app.post('/register', async (req, res) => {
  console.log("POST");
  console.log(req.body.email);
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = { email: req.body.email, password: hashedPassword }

    Register.create(newUser, (error,) => {
      if (error) {
        res.send(error)
      } else {
        res.send(hashedPassword);
      }
    });
  } catch (err) { res.send(err); }
});
app.get('/register/existed', async (req, res) => {
  const { email, password } = req.query;
  console.log(email);
  const mail = await Register.find({ email: email })
  console.log("MAIL " + mail[0].password)
  if (bcrypt.compareSync(password, mail[0].password)) {
    res.send(mail[0].password);
  } else {
    res.send("wrong password");
  }
});

app.get('/register/exist', async (req, res) => {
  const { email, password } = req.query;
  console.log("regist with specific user " + email);
  const registerList = await Todo.find({ email: email })
  res.send(registerList);
})


app.post('/register/exist', async (req, res) => {
  console.log("POST Exsist " + req.body);
  await Todo.create(req.body, (error, result) => {
    if (error) { res.send(error) }
    else { res.send(result) }
  })
})

app.put('/register/exist/:id', async (req, res) => {
  console.log(req.body + " req Query");
  console.log(req.params.id);
  await Todo.findByIdAndUpdate(req.params.id, req.body);
});

app.listen(3002, () => console.log('Server listening on port 3002'));