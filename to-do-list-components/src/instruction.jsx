import React from 'react';
import styled from 'styled-components'

const InstructionStyled = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;

`

export default () => {
    return (
        <div>
            <InstructionStyled>
                <details>
                    <summary>Instruction</summary>
                    <li>Please enter Your new task.</li>
                        <li>This is another line that I don't know what to write inside</li>
                </details>
            </InstructionStyled>
        </div>
    )
}