import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function InputForm(props) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [temp, setTemp] = useState('');

  const addTask = () => {
    setInput(temp);
    setTasks([...tasks, input]);
    setInput('');
    setTemp('')
  }

  const deleteTask = (index) => {
    let updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  const updatedTask = (index, task) => {
    // let temp = tasks[index];
    if (input === "") {
      setInput(tasks[index]);
      // tasks[index] = input;

    }else{
      // tasks[index] = input;
    }
    // setInput(tasks[index]);
    // tasks[index] = input;

  }

  const doneUpdate = (index, task) => {
    setInput(temp);
    tasks[index] = input;
  }

  return (
    <div >
      <div >
        {/* <img
          src='/home/refael/infinity/new/react/to-do-list/to-do-list/public/logo192.png'
          alt='Where is my pic??'
        /> */}
        <div className='padding'></div>
        <div className='inputForm'>
          <input type="text"
            style={{ width: "70%" }}
            placeholder='Add a new task'
            value={input}
            onChange={e => setInput(e.target.value)} />
          <button style={{ height: 21, width: 40 }} onClick={addTask}>Add</button>
          <button style={{ height: 21, width: 40 }} onClick={addTask}>Update</button>
        </div>
        <div className='taskList'>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <div className='deleteMission'>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                  <button onClick={() => updatedTask(index, task)}>Update</button>
                  <button onClick={() => doneUpdate(index, task)}>Done</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: [{
        mission: Array(),
      }]
    }
  }

  onClick() {
    console.log(5);
  }

  render() {
    const missions = this.state.missions;

    return (
      <div>
        <div>
          <div> <InputForm missions={missions} /> </div>
        </div>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);


