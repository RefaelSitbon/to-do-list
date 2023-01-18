import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import SecoundPage from './secoundPage';

const DivStyled = styled.div
    `
    margin: 0% 0% 0% 0%;
    padding: 0% 0% 100% 0%;
    background: #912121;
`

const DivBox = styled.div
    `
margin: 30% 16% 0% 16%;
padding: 0% 0% 0% 0%;
background: lightsalmon;
box-sizing: border-box;
border: 8px solid red;
`

const DivTable = styled.div
    `
    margin: 2% 5% 0% 5%;
`

const RegisterStyle = styled.h1
    `
margin: 0% 17% 0% 28%;
padding: 0% 11% 0% 11%;
`

const InputMail = styled.input
    `
margin: 7% 0% 0% 18%;
padding: 1% 11% 1% 11%;
`

const InputPassword = styled.input
    `
margin: 0% 0% 0% 18%;
padding: 1% 11% 1% 11%;
`

const RegisterStyled = styled.button
    `
margin: 1% 0% 0% 14%;
padding: 1% 11% 1% 11%;
`

export default () => {
    const [inputMail, setInputMail] = useState("");
    const [inputNumber, setInputNumber] = useState("");
    const url = 'http://10.1.0.52:3002/register';

    const [showComponent, setShowComponent] = useState(false);

    const handleRegister = () => {
        setShowComponent(false);
        if (inputMail.indexOf("@") < 1 || inputMail.indexOf("@") === inputMail.length - 1 || inputNumber === "") {
            console.log(inputMail + " Illigal");
        }
        else {
            console.log(inputMail + " CHECK!!");
            axios.get(url, { params: { email: inputMail, password: inputNumber } }).then(({ data }) => {
                if (data === "EnterNewUser") {
                    axios.post(url, {
                        email: inputMail,
                        password: inputNumber,
                    }).then(({ data }) => {
                        console.log("Hello new member");
                        sessionStorage.setItem('token', JSON.stringify(data));
                        console.log("After storage " + data)
                    }
                    );
                } else if (data === "Success") {
                    console.log(data + " FROM FRONT");
                } else {
                    console.log(data + " FROM FRONT");
                }
            });
        }
    }

    const handleLogIn = () => {
        setShowComponent(false);
        axios.get(url + "/existed", { params: { email: inputMail, password: inputNumber } }).then(({ data }) => {
            console.log("1 " + data);
            console.log("2 " + JSON.parse(sessionStorage.getItem('token')));

            if (data === JSON.parse(sessionStorage.getItem('token'))) {
                setShowComponent(true);
            } else {
                setShowComponent(false);
            }
        })
    }

    return (
        <DivStyled>
            <div>
                <Link to="secoundPage">secoundPage</Link>
            </div>
            <DivBox>
                <RegisterStyle>Register</RegisterStyle>
                <InputMail
                    type="email"
                    name="email"
                    placeholder='Enter your mail'
                    value={inputMail}
                    onChange={e => setInputMail(e.target.value)}
                />
                <InputPassword
                    type="password"
                    placeholder='Enter your password'
                    value={inputNumber}
                    onChange={e => setInputNumber(e.target.value)}
                />
                <div>
                    <RegisterStyled onClick={() => handleRegister()}>register</RegisterStyled>
                    <RegisterStyled onClick={() => handleLogIn()}>log in</RegisterStyled>
                </div>
            </DivBox>
            <DivTable>
                {showComponent ? <SecoundPage inputMail={inputMail} inputNumber={inputNumber} /> : null}
            </DivTable>
        </DivStyled>
    );
}