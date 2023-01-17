import React, { useState } from "react";
import TasksTable from "./tasksTable";
import styled from "styled-components";

const DivStyled = styled.div
    `
margin: 0% 20% 0% 20%;
padding: 1% 0% 0% 0%;
`

export default (props) => {
    const { tasks, setTasks, updateTasks } = props;


    return (
        <DivStyled>
            <TasksTable tasks={tasks} setTasks={setTasks} updateTasks={updateTasks}
            />
        </DivStyled>
    )
}