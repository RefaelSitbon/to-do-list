import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

const { Schema, model } = mongoose;
const url = 'mongodb://localhost:27017/students';
const todoSchema = new Schema({
  index: Number,
  task: String,
  completed: String,
});

const Todo = model('Todo', todoSchema);

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

mongoose.connect(url);  

app.get('/list', async (req, res) => {
  const todoList = await Todo.find({}).exec();
  res.send(todoList);
  // res.send('<!DOCTYPE html><html style="color:red"><h1>Hell World</h1></html>')

});

app.post('/list', async(req, res) => {
  await Todo.create(req.body, (error, result) => {
    if(error){ res.send(error); }
    else{ res.send(result); }
  });
});

app.delete(`/list/:id`, async(req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.send("Deleted Successed");
});

app.put('/list/:id', async(req, res) => {
  console.log(req.body);
  await Todo.findByIdAndUpdate(req.params.id, req.body)
});

app.listen(3001, () => console.log('Server listening on port 3001'));