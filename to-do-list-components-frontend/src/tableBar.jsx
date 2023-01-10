import React, { useState } from "react";
import TasksTable from "./tasksTable";
import DeleteTask from "./deleteTask";
import UpdateTask from "./updateTask";
import styled from "styled-components";

const DivStyled = styled.div
`
margin: 0% 20% 0% 20%;
padding: 1% 0% 0% 0%;
`
// `
// margin: 1% 1% 1% 1%;
// flex-direction: column;
// box-sizing: content-box;
// `

const TableBarStyled = styled.div`
display: flex;
justifyContent: left;
alignItems: center;
`;

export default (props) => {
    const { tasks, setTasks, updateTasks} = props;
    const arr = [];
    for(let i = 0; i < tasks.length; ++i){
        arr[i] = tasks[i] + {dis: false}
        // console.log(arr[i].task)
    }

    return(
        <DivStyled>
            <TasksTable tasks={tasks} setTasks={setTasks} 
             />
        </DivStyled>
    )
}