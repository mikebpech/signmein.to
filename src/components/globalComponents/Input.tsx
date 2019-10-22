import React from 'react';
import styled from 'styled-components';

interface IProps {
    placeholder: String
    label: String
    type: String
  }

export const Input: React.FC<IProps> = props => (
    <InputContainer>
        <InputLabel>{props.label}</InputLabel>
        <TextInput type={props.type} placeholder={props.placeholder} />
    </InputContainer>
)

const InputContainer = styled.div`
    
`

const TextInput = styled.input`
    border-radius: 4px;
    padding: 8px 0;
    padding-left: 12px;
    color: #212B36;
    border: 1px solid #C4CDD5;
    box-shadow: inset 0 1px 2px 0 rgba(103,113,123,0.2);
    -webkit-transition: 0.2s ease-in-out;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    width: calc(100% - 15px);
    height: 20px;
    font-size: 14px;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 1px #0F3DD0;
        border: 1px solid #0F3DD0;
    }

    &:hover {
        border: 1px solid #a6b4c0;
    }
`

const InputLabel = styled.div`
    text-transform: uppercase !important;
    letter-spacing: 0 !important;
    color: #919EAB;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
`