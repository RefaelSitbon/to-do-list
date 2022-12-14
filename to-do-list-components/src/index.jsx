import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header'
import Instruction from './instruction'
import InputTask from './inputTask'
import TopBar from './topBar';
import './index.css';
import styled, { ThemeProvider } from 'styled-components'

const StyledPage = styled.div`
min-height: 100vh;
text-align: center;
padding-top: 1rem;
background-color: ${(props) => props.theme.body};
`

const darkTheme = {
  body: "#1c1c1c",
  title: "red",
  subtitle: "#b6b6b6",
}

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#b6b6b6",
}

function Main() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyledPage>
        <Header />
        <Instruction />
        <TopBar toggleTheme={toggleTheme} />
        <InputTask />
      </StyledPage>
    </ThemeProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
