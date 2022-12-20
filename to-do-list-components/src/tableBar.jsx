import React, { useState } from "react";
import TasksTable from "./tasksTable";
import DeleteTask from "./deleteTask";
import UpdateTask from "./updateTask";
import styled from "styled-components";

const TableBarStyled = styled.div`
display: flex;
justifyContent: left;
alignItems: center;

`;

export default (props) => {
    const [isDisable, setIsDisable] = useState(false);
    const [change, setChange] = useState('');

    return(
        <div style={{display: "flex", alignItems: "center", justifyContent:"left"}} >
            <DeleteTask tasks={props.tasks} setTasks={props.setTasks}/>
            <UpdateTask tasks={props.tasks} setTasks={props.setTasks} 
            isDisable={isDisable} setIsDisable={setIsDisable} change={change} setChange={setChange}
             />
            <TasksTable tasks={props.tasks} setTasks={props.setTasks} 
            isDisable={isDisable} setIsDisable={setIsDisable} change={change} setChange={setChange}
             />
        </div>
    )
}