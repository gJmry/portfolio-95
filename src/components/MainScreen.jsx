import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Monitor } from 'react95';
import { BuzzText } from './BuzzyText.jsx';
import MonitorWithHourglass from './MonitorAndHourglass.jsx';
import PortfolioScreen from './PortfolioScreen.jsx';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const ScreenWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const MainScreen = () => {
    const navigate = useNavigate();
    const [isHourglass, setIsHourglass] = useState(false);
    const [showPortfolio, setShowPortfolio] = useState(false);

    const handleMonitorClick = () => {
        setIsHourglass(!isHourglass);
        const timer = setTimeout(() => {
            navigate('/portfolio');
        }, 3000);

        return () => clearTimeout(timer);
    };

    return (
        <Container>
            <BuzzText text="Jeremy Girard" />
            <ScreenWrapper onClick={handleMonitorClick}>
                {showPortfolio ? <PortfolioScreen /> : (isHourglass ? <MonitorWithHourglass /> : <Monitor backgroundStyles={{ background: 'blue' }} />)}
            </ScreenWrapper>
        </Container>
    );
};

export default MainScreen;
