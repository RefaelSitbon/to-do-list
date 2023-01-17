import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const ButtonStyled = styled.button
`
margin: 0% 1% 0% 1%;
padding: 0% 0% 0% 0%;
`

export default (props) => {
    const { tasks, setTasks, index, task, arr, setArr, inputMail } = props;

    const handleUpdate = (index, id) => {
        const ar = [...arr];
        ar[index] = !arr[index]
        setArr(ar);

        if (arr[index] === true) {
            const array = [...tasks];
            array[index].task = tasks[index].task;

            setTasks(array)
            const task = tasks[index].task;

            axios.put(`http://localhost:3002/register/exist/${id}`,
                {
                    mail: inputMail,
                    task: task,
                }).then(console.log(tasks[index].task + " updated in Monogo")).catch(err => console.log("ERROR!!! " + err))
        }
    }
    return(
        <ButtonStyled onClick={() => handleUpdate(index, task._id)}>U</ButtonStyled>
    );
}