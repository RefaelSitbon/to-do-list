import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const UpdateTask = styled.button`
display: inline-block;
display: flex;

font-size: 0.8rem;
color: yellow;
background-color: ${(props) => props.theme.body};
margin: 0.5em;
padding: 0.5em 0.1em;
border: 2px solid white;
border-radius: 5px;
  `;

const InputStyled = styled.input`
margin: 7px;
background: green;
border-radius: 3%;
padding-left:30%;
`;


export default (props) => {
    const { tasks, setTasks, isDisable, setIsDisable, change, setChange } = props;

    const handleUpdate = (index, id) => {

        setIsDisable(!isDisable);
        if (isDisable === true) {
            const array = [...tasks];
            array[index].task = change;
            // setChange('');

            setTasks(array)
            console.log(index + " In Update side")
            const task = tasks[index].task;
            console.log(task);


            axios.put(`http://localhost:3001/list/${id}`,
                {
                    task: task,
                }).then(console.log(tasks[index].task + " updated in Monogo")).catch(err => console.log("ERROR!!! " + err))
        }
    }

    return (
        <div>
            {
                tasks.map((task, index) => {
                    return (
                        <div key={index}>
                            <UpdateTask onClick={() => handleUpdate(index, task._id)}>
                                Update</UpdateTask>
                            {/* <InputStyled
                                value={update}
                                onChange={(e) => setUpdate(e.target.value)}
                                style={{ display: visible ? "block" : "none" }}
                            /> */}
                        </div>
                    );
                })
            }
        </div>
    );
}