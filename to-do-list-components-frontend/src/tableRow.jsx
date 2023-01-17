import React, { useState } from "react";
import styled from "styled-components";

const TableStyle = styled.input
    `
    padding: 0% 58% 1% 0%;
    margin: 1% -10% 0% 0%;
`

export default (props) => {
    const { index, task, arr, setArr } = props;
    const [ch, setCh] = useState();
    const handleChange = (e, task) => {
        setCh(task.task);

        task.task = e.target.value;
    }

    return (
        <TableStyle
            type="text"
            value={task.task}
            onChange={e => handleChange(e, task)}
            disabled={!arr[index]}
        />
    )
}