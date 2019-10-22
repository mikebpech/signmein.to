import React from 'react';
import styled from 'styled-components';

interface IProps {
    type: String
  }

export const Button: React.FC<IProps> = props => (
    <ButtonWrapper type={props.type}>
        <span>
        {props.children}
        </span>
    </ButtonWrapper>
)

const ButtonWrapper = styled.button`
    border-radius: 6px;
    user-select: none;
    white-space: nowrap;
    text-decoration: none;
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
    background: ${props => props.type !== 'danger' ? "linear-gradient(180deg, #6986FF, #4367F7)" : 'linear-gradient(180deg,#da3838,#922d2d)'};
    border-color: #4367F7;
    color: #FFFFFF;

    &:hover {
        background: ${props => props.type !== 'danger' ? "linear-gradient(180deg, #4367F7, #3358E9)" : 'linear-gradient(180deg,#af2c2c,#922d2d)'};
        border-color: #3358E9;
    }

    span {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        padding: 0.525rem 1rem;
        border-width: 1px;
        border-style: solid;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
        font-size: 14px;
        font-weight: 200;
        height: 20px;
    }
`