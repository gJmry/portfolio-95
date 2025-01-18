import React from 'react';
import styled from 'styled-components';
import { Footer } from './Footer.jsx';

const PortfolioContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: white;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PortfolioScreen = () => {
    return (
        <PortfolioContainer>
            <Content>
                <div>Bienvenue sur le portfolio de Jeremy Girard</div>
            </Content>
            <Footer />
        </PortfolioContainer>
    );
};

export default PortfolioScreen;
