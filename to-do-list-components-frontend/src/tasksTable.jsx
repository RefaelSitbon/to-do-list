import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import TableRow from "./tableRow";

const DivStyled = styled.div
    `
    margin: 0% 0% 0% 0%;
    padding: 0% 0% 30px 0%;
    box-sizing: border-box;
    border: 8px solid red;

`

const RowStyled = styled.div
    `
margin: 0% 0% 0% 0%;
    padding: 0% 0% 0% 0%;
`

const TableStyle = styled.input
    `
    padding: 0% 58% 1% 0%;
    margin: 1% -10% 0% 0%;
`

const UpdateTask = styled.button
    `
    margin: 0% 1% 0% 1%;
    padding: 0% 0% 0% 0%;
`

const DeleteTask = styled.button
    `
    margin: 0% 1% 0% 1%;
    padding: 0% 0% 0% 0%;
`

export default (props) => {
    const { tasks, setTasks } = props;

    const [ch, setCh] = useState();
    const handleChange = (e, task) => {
        setCh(task.task);
        
        task.task = e.target.value;
    }

    const handleDelete = (id, index, task) => {
        console.log(task.task + "JUST TO CHECK");

        axios.delete(`http://localhost:3001/list/${id}`).then(res => {
            console.log(res.status);
            const array = [...tasks];
            array.splice(index, 1);

            setTasks(array);

            console.log(index + " index !!!!!!")
        })
    }

    const handleUpdate = (index, id) => {
        const ar = [...arr];
        ar[index] = !arr[index]
        setArr(ar);

        if (arr[index] === true) {
            const array = [...tasks];
            array[index].task = tasks[index].task;

            setTasks(array)
            console.log(index + " In Update side")
            const task = tasks[index].task;
            console.log(task + "JUST TO CHECK");

            axios.put(`http://localhost:3001/list/${id}`,
                {
                    task: task,
                }).then(console.log(tasks[index].task + " updated in Monogo")).catch(err => console.log("ERROR!!! " + err))
        }
    }

    const [arr, setArr] = useState([]);

    return (
        <DivStyled >
            {
                tasks.map((task, index) => {
                    return (
                        <RowStyled key={index} >
                            <TableStyle
                                type="text"
                                value={task.task}
                                onChange={e => handleChange(e, task)}
                                disabled={!arr[index]}
                            />
                            <DeleteTask key={index} onClick={() => handleDelete(task._id, index, task)}>D</DeleteTask>
                            <UpdateTask onClick={() => handleUpdate(index, task._id)}>
                                U</UpdateTask>
                        </RowStyled>
                    );
                })}
        </DivStyled>
    );
}