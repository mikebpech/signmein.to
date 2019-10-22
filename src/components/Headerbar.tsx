import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo/logo-temp.png';

class Headerbar extends Component<{}, {}> {
    render() {
        return (
            <Wrapper>
                <div className="logo">
                    <img src={logo} alt="Logo of company"/>
                </div>
            </Wrapper>
        );
    }
}

export default Headerbar;

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    height: 56px;
    background-color: #1b3fae;
    position: fixed;
    width: 100%;
    color: #fff;

    .logo {
        margin-left: 2.5rem;
        width: fit-content;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 120px;
            height: auto;
        }
    }
`