import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #282c34;
    color: white;
    font-size: 2rem;
    font-family: 'Courier New', monospace;
`;

const PortfolioScreen = () => {
    return (
        <PortfolioContainer>
            <div>Bienvenue sur le portfolio de Jérémy Girard</div>
        </PortfolioContainer>
    );
};

export default PortfolioScreen;
