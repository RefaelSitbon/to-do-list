import React from "react";
import styled from 'styled-components'

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

    const handleClick = () => {
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
            <ButtonStyled onClick={() => handleClick()}>Add Task</ButtonStyled>
        </div>
    )
};