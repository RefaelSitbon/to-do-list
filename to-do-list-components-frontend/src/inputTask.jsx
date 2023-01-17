import React, { useState } from "react";
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
    const { tasks, setTasks, updateTasks, inputMail, inputNumber } = props;
    const [input, setInput] = useState('');

    const handleClick = (e) => {
        if (input !== "") {

            e.preventDefault();

            axios.post('http://localhost:3002/register/exist',
                {
                    task: input,
                    email: inputMail,
                }).then(res => {
                    console.log(res.status);
                })
                
                setInput('');
                
                updateTasks();
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