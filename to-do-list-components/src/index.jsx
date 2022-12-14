import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header'
import Instruction from './instruction'
import InputTask from './inputTask'
import TopBar from './topBar';
import TasksTable from './tasksTable';
import './index.css';
import styled, { ThemeProvider } from 'styled-components'

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
  subtitle: "#b6b6b6",
}

function Main() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  }

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [countTasks, setCountTasks] = useState(0);
  

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledPage>
        <Header />
        <Instruction />
        <TopBar toggleTheme={toggleTheme} />
        <InputTask tasks={tasks} setTasks={setTasks} input={input} setInput={setInput}/>
        <TasksTable tasks={tasks} />
      </StyledPage>
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
