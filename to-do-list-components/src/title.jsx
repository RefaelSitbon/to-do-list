import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.div`
color: ${(props) => props.theme.title};
display: flex;
font-size: 40px;
`

export default (props) => {
    return(
        <StyledTitle >
           Welcom to my to-do list
        </StyledTitle>
    )
};

