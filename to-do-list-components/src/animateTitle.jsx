import React from 'react';
import styled, { keyframes } from 'styled-components'


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 4s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export default () => {
    return (
        <Rotate><img src='/logo192.png' alt="Where is my img??" height={40} width={40}/></Rotate>
    )
}