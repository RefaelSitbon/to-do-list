import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import TableRow from "./tableRow";


export default (props) => {
    const { tasks, setTasks, isDisable, setIsDisable, change, setChange } = props;

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
                            <TableRow task={task} index={index} isDisable={isDisable} setIsDisable={setIsDisable}
                            tasks={tasks} setTasks={setTasks} change={change} setChange={setChange} />
                            
                                {/* {(index + 1) + ":   "}&nbsp; */}
                                {/* {task.task} */}
                                {/* {". complete? " + task.completed} */}
                        </div>
                    );
                })}
        </div>
    );
}