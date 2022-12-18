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

export default (props) => {
    const { tasks, setTasks, input, setInput } = props;
    const [inputEnabled, setInputEnabled] = useState(false);
    const [update, setUpdate] = useState('');

    const handleUpdate = (index, id) => {
        setInputEnabled(true);
        const task = tasks[index];
        task.task = update;
        setUpdate('');
        setTasks(tasks);
        console.log(task.task)

        axios.put(`http://localhost:3001/list/${id}`,
            {
                task: task.task,
            })

        setInputEnabled(false);
    }

    return (
        <div>
            {
                tasks.map((task, index) => {
                    return (
                        <div key={index}>
                            <UpdateTask onClick={() => handleUpdate(index, task._id)}>
                                <input
                                    value={update}
                                    onChange={(e) => setUpdate(e.target.value)}
                                    disabled={inputEnabled}
                                />
                                Update</UpdateTask>
                        </div>
                    );
                })
            }
        </div>
    );
}