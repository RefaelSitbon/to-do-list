import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const DeleteTask = styled.button
    `
    margin: 0% 1% 0% 1%;
    padding: 0% 0% 0% 0%;
`

export default (props) => {
    const { tasks, setTasks, index, task } = props;

    const handleDelete = (id, index, task) => {

        axios.delete(`http://localhost:3002/list/${id}`).then(res => {
            console.log(res.status);
            const array = [...tasks];
            array.splice(index, 1);
            setTasks(array);
        })
    }

    return (
        <DeleteTask onClick={() => handleDelete(task._id, index, task)}>D</DeleteTask>
    );
}