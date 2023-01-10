import React from "react";
import styled from 'styled-components'
import axios from 'axios';

const InputStyled = styled.input``
// `
// padding: 1% 35%;
// margin: 7px;
// background: silver;
// border: none;
// border-radius: 3%;
// align-items: center;
// display: flex;
// padding-left:50%;
// `;

const ButtonStyled = styled.button``
// `
// color: ${(props) => props.theme.title};
// font-size: 1em;
// margin: 0.5em;
// padding: 0.5em 1em;
// border: 2px solid ${(props) => props.theme.title};
// border-radius: 15px;
// `;

export default (props) => {
    const { tasks, setTasks, input, setInput } = props;

    const handleClick = (e) => {
        if (input !== "") {
            const id = tasks.length + 1;

            e.preventDefault();

            axios.post('http://localhost:3001/list/',
                {
                    index: id,
                    task: input,
                    completed: "false",
                }).then(res => {
                    console.log(res.status);
                })
                
                console.log(input + "INPUUUUTTTT")
                const temp_tasks = [...tasks, input];
                setTasks(temp_tasks);
                setInput('');
        }
    };
    return (
        <div>
            <InputStyled className="input"
                placeholder="Input your new task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <ButtonStyled onClick={(e) => handleClick(e)}>Add Task</ButtonStyled>
        </div>
    )
};