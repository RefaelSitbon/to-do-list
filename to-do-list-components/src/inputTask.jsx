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
`

export default () => {
    return (
        <div>
            <InputStyled placeholder="Input your new task"></InputStyled>
        </div>
    )
};