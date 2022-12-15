import React from "react";
import styled from "styled-components";

const DeleteTask = styled.button`
display: inline-block;
display: flex;
font-size: 0.8rem;
color: red;
background-color: ${(props) => props.theme.body};
margin: 0.5em;
padding: 0.5em 0.1em;
border: 2px solid white;
border-radius: 5px;
  `;

export default (props) => {
    const { tasks, setTasks } = props;

    const handleDelete = (index) => {
        const array = [...tasks];
        array.splice(index, 1);
        setTasks(array);
    }

    return (
        <div>
            {
                tasks.map((task, index) => {
                    return (
                        <DeleteTask key={index} onClick={() => handleDelete(index)}>Delete</DeleteTask>
                    );
                })
            }
        </div>
    );
}