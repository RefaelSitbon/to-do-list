import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

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
  origin: 'http://localhost:3000',
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
  const registersList = await Register.find({});
  res.send(registersList);
});

app.post('/register', async (req, res) => {
  console.log("POST");
  console.log(req.body.email);

  // const user = { email: req.body.email };
  // console.log(1)
  // const accessToken = jwt.sign(user, 'astdgsadhreag');
  // console.log(accessToken);
  // sessionStorage.setItem('token', JSON.stringify(accessToken));
  // console.log(3);
  // res.json({ accessToken: accessToken });

  // try {
  //   const salt = await bcrypt.genSalt();
  //   const hashedPassword = await bcrypt.hash(req.body.password, salt);
  //   console.log("SALT " + salt);
  //   console.log("PASSWORD " + req.body.password);
  //   console.log("HashedPassword " + hashedPassword);

  // }catch(err){
  //   res.send(err);
  // }
  await Register.create({email: req.body.email, password: req.body.password}, (error, result) => {
    if (error) { res.send(error) }
    else { res.send(result) }
  });
  // console.log(1)
  // const token = jwt.sign({id: req.body.email}, process.env.SECRET, {expiresIn: 86400});
  // console.log(2)


  // res.send({auth: true, token: token});
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