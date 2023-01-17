import React, { useEffect, useState } from 'react';
import Header from './header'
import Instruction from './instruction'
import TopBar from './topBar';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import TasksTable from "./tasksTable";


export default (props) => {
    const {inputMail, inputNumber} = props;

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

    const [theme, setTheme] = useState("dark");
    const isDarkTheme = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDarkTheme ? 'light' : 'dark');
    }

    const [tasks, setTasks] = useState([]);

    const updateTasks = () => {
        axios.get('http://localhost:3002/register/exist/', {params: {email: inputMail, password: inputNumber}}).then(({ data }) => {
            let userTasks = [];
            for(let i = 0; i < data.length; ++i){
                userTasks.push(data[i]);
            }

            setTasks(userTasks);
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
                <TasksTable tasks={tasks} setTasks={setTasks} updateTasks={updateTasks} 
                inputMail={inputMail} inputNumber={inputNumber} />
            </StyledPage>
        </ThemeProvider>
    )
}