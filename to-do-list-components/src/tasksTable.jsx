import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const TableStyle = styled.input`
justifyContent: lefts;
alignItems: left;
padding: 0.7em 015.1em;

display: flex;
color: white;
background: ${(props) => props.theme.subtitle};
`

export default (props) => {
    const { tasks, setTasks, isDisable, setIsDisable, update, setUpdate } = props;
    const [value, setValue] = useState(tasks);

    axios.get('http://localhost:3001/list/').then(res => {
        const tasksArray = res.data;

        setTasks(tasksArray);
    });

    return (
        <div >
            {
                tasks.map((task, index) => {
                    return (
                        <div key={index}>
                            <TableStyle
                            type="text"
                            value={ task.task}
                            onChange={e => setUpdate(e.target.value)}
                            disabled={!isDisable}
                            />
                                {/* {(index + 1) + ":   "}&nbsp; */}
                                {/* {task.task} */}
                                {/* {". complete? " + task.completed} */}
                        </div>
                    );
                })}
        </div>
    );
}