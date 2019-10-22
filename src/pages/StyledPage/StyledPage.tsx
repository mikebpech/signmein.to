import React, { Component } from 'react';
import styled from 'styled-components';

import { Button } from '../../components/globalComponents/Button';
import { Input } from '../../components/globalComponents/Input';

class StyledPage extends Component<{},{}> {
    render() {
        return (
            <Container>
                <h1>Styled Page</h1>
                <p>This is a page with all components/styles and how to use them.</p>
                <div className="divider"></div>
                <Section>
                    <h3>Buttons</h3>
                    <div className="components">
                        <Button type="primary">Primary</Button>
                        <Button type="danger">Danger</Button>
                    </div>
                </Section>
                <Section>
                    <h3>Inputs</h3>
                    <div className="components">
                        <Input type="text" label="Label" placeholder="Input Example" />
                    </div>
                </Section>
            </Container>
        );
    }
}

export default StyledPage;

const Container = styled.div`
    width: 100%;
    padding: 15px;

    .divider {
        width: 100%;
        border-top: 1px solid #ddd;
    }
`

const Section = styled.div`
    margin-top: 10px;

    .components {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 10px 0;

        & > * {
            margin-right: 10px;
        }
    }
`