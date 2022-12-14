import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header'
import Instruction from './instruction'
import InputTask from './inputTask'
import './index.css';
import styled from 'styled-components'

const StyledPage = styled.head`
background: papayawhip;
background-color: rgb(63, 55, 55);

`

function Main() {
  return (
    <div>
      <Header />
      <Instruction />
      <InputTask />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
