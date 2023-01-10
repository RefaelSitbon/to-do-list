import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const DeleteTask = styled.button
`
margin: 1% 1% 1% 1%;
padding: 1% 1% 1% 1%;
display: block;
`
// `
// display: inline-block;
// display: flex;
// font-size: 0.8rem;
// color: red;
// background-color: ${(props) => props.theme.body};
// margin: 0.5em;
// padding: 0.5em 0.1em;
// border: 2px solid white;
// border-radius: 5px;
//   `;

export default (props) => {
    const { tasks, setTasks, updateTasks } = props;
    let temp = [...tasks];

    const handleDelete = (id, index, task) => {
        // console.log(tasks)
        // console.log(temp)
        // const array = tasks.filter((tas) => tas._id !== id);
        // array.splice(index, 1);
        // // temp = [...array];
        // setTasks(array);

        // console.log(array);
        console.log(task.task);

        axios.delete(`http://localhost:3001/list/${id}`).then(res => {
            console.log(res.status);
            const array = [...tasks];
            array.splice(index , 1);
            
            // console.log(" before setTasks");
            // console.log(tasks);
            setTasks(array);

            // console.log(array)
            // console.log(tasks)

            console.log(index + " index !!!!!!")
        })
    }

    return (
        <div>
            {
                tasks.map((task, index) => {
                    return (
                        <DeleteTask key={index} onClick={() => handleDelete(task._id, index, task)}>Delete</DeleteTask>
                    );
                })
            }
        </div>
    );
}