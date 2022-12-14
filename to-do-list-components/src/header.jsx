import React from 'react';
import styled from 'styled-components'

const StyledHead = styled.head`
color: red;
display: flex;
  height:0;

padding: 3% 30%;
font-size: 40px;
`

export default () => {
    return(
        <div>
            <StyledHead>Welcom to my to-do list</StyledHead>
        </div>
    )
};

