import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

// const express = require('express');
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

// const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

mongoose.connect(url);  

app.get('/list', async (req, res) => {
  const todoList = await Todo.find({}).exec();
  res.send(todoList + "REAL!!!");
  // res.send('<!DOCTYPE html><html style="color:red"><h1>Hell World</h1></html>')

});

app.post('/list', (req, res) => {
  Todo.create(req.body, (error, result) => {
    if(error){ res.send(error); }
    else{ res.send(result); }
  });
});

app.listen(3001, () => console.log('Server listening on port 3001'));