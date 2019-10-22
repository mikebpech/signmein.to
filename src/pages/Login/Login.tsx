import React, { Component } from 'react';
import styled from 'styled-components';
import { Input } from '../../components/globalComponents/Input';
import { Button } from '../../components/globalComponents/Button';

interface IProps {

}

interface IState {

}

class Login extends Component<IProps, IState> {
    render() {
        return (
            <LoginContainer>
                <h1>Login</h1>
                <div className="forms">
                    <GoogleButton />
                    <Or>OR</Or>
                    <Inputs>
                        <Input type="text" placeholder="john@doe.com" label="Email" />
                        <Input type="password" placeholder="************" label="Password" />
                        <Button type="primary">Login</Button>
                    </Inputs>
                </div>
            </LoginContainer>
        );
    }
}

export default Login;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > * {
        margin-bottom: 10px;
    }
`

const Or = styled.div`
    display: flex;
    justify-content: center;
    color: #919EAB;
    font-size: 20px;
    padding: 20px 0;
`

const LoginContainer = styled.div`
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
    padding-left: 4rem;
    padding-right: 4rem;
    background-color: #FFFFFF;
    border-radius: 4px !important;
    width: 500px;
    height: 460px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .forms {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 75%;
    }
`

const GoogleButton = styled.button`
    -webkit-appearance: none;
    cursor: pointer;
    align-items: center;
    text-align: center;
    outline: 0;
    padding: 0;
    display: inline-block;
    font-family: inherit;
    border: none;
    box-shadow: none;
    background: none;
    width: 191px;
    background-image: url("https://assets.secure.collage.co/assets/btn_google_signin_dark_normal_web@2x-de7ca32bb8f8e4a8635504366e14ca249e1b8768894920d3dbb9a66b2a7f0de2.png");
    height: 46px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`