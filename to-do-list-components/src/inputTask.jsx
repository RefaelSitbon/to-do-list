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



export default (props) => {
    const {tasks, setTasks, input, setInput} = props;

    const handleClick = () => {
        const id = tasks.length + 1;
        
        setTasks(prev => [
            ...prev,
            {
                id: id,
                task:input,
                completed:"false",
            }
        ]);
        setInput('');

    };
    return (
        <div>
            <InputStyled 
            placeholder="Input your new task"
            value={input}
            // onInput={(e) => setInput(e.target.value)}
            onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => handleClick()}>Add Task</button>
        </div>
    )
};