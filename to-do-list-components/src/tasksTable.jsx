import React from "react";
import styled from "styled-components";
import DeleteTask from "./deleteTask";

const TableStyle = styled.table`
justifyContent: lefts;
alignItems: left;
display: flex;
color: ${(props) => props.theme.subtitle};
`

export default (props) => {
    const { tasks, setTasks } = props;

    return (
        <div >
            {
                props.tasks.map((task, index) => {
                    return (
                        <ol>
                            <TableStyle
                                key={index}
                                completed={task.completed}
                                id={task.id}
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