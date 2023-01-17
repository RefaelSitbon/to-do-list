import React, { useState } from "react";
import styled from "styled-components";
import InputTask from "./inputTask";
import UpdateTask from "./updateTask";
import DeleteTasks from "./deleteTask";
import TableRow from "./tableRow";

const DivStyled = styled.div
    `
    margin: 0% 0% 0% 0%;
    padding: 2% 0% 30px 0%;
    box-sizing: border-box;
    border: 8px solid red;

`

const OuterDivStyled = styled.div
    `
margin: 0% 20% 0% 20%;
padding: 1% 0% 0% 0%;
`

const RowStyled = styled.div
    `
margin: 0% 0% 0% 0%;
    padding: 0% 0% 0% 0%;
`

const DivFooterStyled = styled.div
    `
        margin: 0% 0% -5% 0%;
    padding: 0% 0% 20px 0%;
`

export default (props) => {
    const { tasks, setTasks, updateTasks, inputMail, inputNumber } = props;
    const [arr, setArr] = useState([]);
    

    return (
        <OuterDivStyled>
            <DivStyled >
                <InputTask tasks={tasks} setTasks={setTasks} updateTasks={updateTasks} inputMail={inputMail} inputNumber={inputNumber} />
                {
                    tasks.map((task, index) => {
                        return (
                            <RowStyled key={index} >
                                <TableRow index={index} task={task} arr={arr} setArr={setArr} />
                                <DeleteTasks tasks={tasks} setTasks={setTasks} index={index} 
                                task={task} inputMail={inputMail} inputNumber={inputNumber}/>
                                <UpdateTask tasks={tasks} setTasks={setTasks} index={index} 
                                task={task} arr={arr} setArr={setArr} 
                                inputMail={inputMail} />
                            </RowStyled>
                        );
                    })
                }
                <hr />
                <DivFooterStyled>
                    {"I can do it also. All the rights save to my passion for getting the fucking first job"}
                </DivFooterStyled>
            </DivStyled>
        </OuterDivStyled>
    );
}