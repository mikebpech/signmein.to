import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { OfflineContainer, Boxes } from '../../components/globalComponents/Container';

import company from '../../assets/company.png'
import user from '../../assets/user.png'

class Landing extends Component {
    render() {
        return (
            <OfflineContainer>
                <h1>Who is this account for?</h1>
                <Boxes>
                    <Link to="/onboarding/company">
                        <div className="box">
                            <img src={company} alt=""/>
                            <h2>Company</h2>
                            <p>I'm an administrator setting up an account for my company</p>
                        </div>
                    </Link>
                    <Link to="/onboarding/individual">
                        <div className="box">
                            <img src={user} alt=""/>
                            <h2>Individual</h2>
                            <p>I am an individual looking to use this product</p>
                        </div>
                    </Link>
                </Boxes>
            </OfflineContainer>
        );
    }
}

export default Landing;

const LandingContainer = styled.div`

`