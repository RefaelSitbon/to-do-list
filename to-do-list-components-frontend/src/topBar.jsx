import React from "react";
import DarkModeButton from './darkModeButton';
import styled from "styled-components";

const TopBarStyle = styled.div`
text-align: left;
padding: 5px;

`

export default ({ toggleTheme }) => {
    return(
        <TopBarStyle>
            <DarkModeButton toggleTheme={toggleTheme}/>
        </TopBarStyle>
    );
}