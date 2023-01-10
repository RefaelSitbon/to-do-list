import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const TableStyle = styled.input
`
padding: 1% 42% 1% 2%;
margin: -1% 1% 1% 1%;
`
// `
// justifyContent: left;
// alignItems: left;
// padding: 0.7em 25.1em;

// display: flex;
// color: white;
// background: ${(props) => props.theme.subtitle};
// `;


export default (props) => {
    const { task, index, isDisable, setIsDisable, tasks, setTasks, change, setChange} = props;
    const [value, setValue] = useState(task.task);


    
    const handleChange = (e) => {
        setValue(e.target.value);
        setChange(value);
        
        // const array = [...tasks];
        // task.task = value;
        // array[index] = task;
        // console.log(index + " In Write side")

        // console.log(task)
        // setTasks(array);
        

        // axios.put(`http://localhost:3001/list/${task._id}`,
        // {
        //     task: task.task,
        // }).then(console.log(tasks[index].task + " updated in Monogo")).catch(err => console.log("ERROR!!! " + err))
    }

    return (
        <TableStyle
            type="text"
            value={value}
            onChange={e => handleChange(e)}
            disabled={!isDisable}
        />
    )
}