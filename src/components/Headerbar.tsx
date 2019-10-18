import React, { Component } from 'react';
import styled from 'styled-components';


class Headerbar extends Component<{}, {}> {
    render() {
        return (
            <Wrapper>
                header
            </Wrapper>
        );
    }
}

export default Headerbar;

const Wrapper = styled.nav`
    height: 56px;
    background-color: #1b3fae;
    position: fixed;
    width: 100%;
    color: #fff;
`