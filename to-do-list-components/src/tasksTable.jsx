import React from "react";
import styled from "styled-components";
import axios from 'axios';

const TableStyle = styled.li`
justifyContent: lefts;
alignItems: left;
display: flex;
color: ${(props) => props.theme.subtitle};
`

export default (props) => {
    const { tasks, setTasks } = props;
    axios.get('http://localhost:3001/list/').then(res => {
        const tasksArray = res.data;

        setTasks(tasksArray);
    });

    return (
        <div >
            {
                tasks.map((task, index) => {
                    return (
                        <ol key={index}>
                            <TableStyle
                                completed={task.completed}
                                id={index+100}
                            >
                                {(index + 1) + ":   "}&nbsp;
                                {task.task}
                            </TableStyle>
                        </ol>
                    );
                })}
        </div>
    );
}