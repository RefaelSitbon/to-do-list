import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header'
import Instruction from './instruction'
import InputTask from './inputTask'
import TopBar from './topBar';
import TableBar from './tableBar';
import './index.css';
import styled, { ThemeProvider } from 'styled-components';

import axios from 'axios';



const StyledPage = styled.div`
min-height: 100vh;
text-align: center;
padding-top: 1rem;
background-color: ${(props) => props.theme.body};
`

const darkTheme = {
  body: "#1c1c1c",
  title: "red",
  subtitle: "#b6b6b6",
}

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#1c1c1c",
}

function Main() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  }

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const updateTasks = () => {
    axios.get('http://localhost:3001/list').then(({data}) => {
      const tasksArray = data;

      // this line make the DOM render the Main component infinit
      setTasks(tasksArray);
    });
  }

  useEffect(() => {
    updateTasks()
  }, []);
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledPage>
        <Header />
        <Instruction />
        <TopBar toggleTheme={toggleTheme} />
        <InputTask tasks={tasks} setTasks={setTasks} input={input} setInput={setInput} />
        <TableBar tasks={tasks} setTasks={setTasks} updateTasks={updateTasks}/>
      </StyledPage>
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);

