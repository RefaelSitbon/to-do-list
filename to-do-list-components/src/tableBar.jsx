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
    const { tasks, setTasks, updateTasks} = props;
    const [isDisable, setIsDisable] = useState(false);
    const [change, setChange] = useState('');

    return(
        <div style={{display: "flex", alignItems: "center", justifyContent:"left"}} >
            <DeleteTask tasks={tasks} setTasks={setTasks} updateTasks={updateTasks} />
            <UpdateTask tasks={tasks} setTasks={setTasks} 
            isDisable={isDisable} setIsDisable={setIsDisable} change={change} setChange={setChange}
             />
            <TasksTable tasks={tasks} setTasks={setTasks} 
            isDisable={isDisable} setIsDisable={setIsDisable} change={change} setChange={setChange}
             />
        </div>
    )
}