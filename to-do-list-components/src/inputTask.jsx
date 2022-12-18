import React from "react";
import styled from 'styled-components'
import axios from 'axios';

const InputStyled = styled.input`
padding: 1% 35%;
margin: 7px;
background: silver;
border: none;
border-radius: 3%;
align-items: center;
display: flex;
padding-left:50%;
`;

const ButtonStyled = styled.button`
color: ${(props) => props.theme.title};
font-size: 1em;
margin: 0.5em;
padding: 0.5em 1em;
border: 2px solid ${(props) => props.theme.title};
border-radius: 15px;
`;

export default (props) => {
    const { tasks, setTasks, input, setInput } = props;

    const handleClick = (e) => {
        if (input !== "") {
            const id = tasks.length + 1;

            setTasks(prev => [
                ...prev,
                {
                    id: id,
                    task: input,
                    completed: "false",
                }
            ]);
            // setInput('');

            e.preventDefault();

            // axios.get('http://localhost:3001/list/').then( res => {
                // const task = res.data;
                // setTasks(prev => [
                //     ...prev,
                //     {
                //         id: id + 200,
                //         task: "WTF????",
                //         completed: 'false',
                //     }
                // ]);
                // console.log(task);
            // })
            axios.post('http://localhost:3001/list/', 
            { 
                index: id,
                task: input, 
                completed: "false",
            }).then(res => {
                console.log(res);
                console.log(res.data);
            })
            setInput('');
        }
    };
    return (
        <div>
            <InputStyled
                placeholder="Input your new task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <ButtonStyled onClick={(e) => handleClick(e)}>Add Task</ButtonStyled>
        </div>
    )
};