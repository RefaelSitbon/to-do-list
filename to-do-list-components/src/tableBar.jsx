import React from "react";
import TasksTable from "./tasksTable";
import DeleteTask from "./deleteTask";
import styled from "styled-components";

const TableBarStyled = styled.div`
display: flex;
justifyContent: left;
alignItems: center;

`;

export default (props) => {
    return(
        <div style={{display: "flex", alignItems: "center", justifyContent:"left"}} >
            <DeleteTask tasks={props.tasks} setTasks={props.setTasks}/>
            <TasksTable tasks={props.tasks} setTasks={props.setTasks}/>
        </div>
    )
}