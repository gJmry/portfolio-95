import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Monitor, ProgressBar } from 'react95';
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const MainScreen = () => {
    const navigate = useNavigate();
    const [isHourglass, setIsHourglass] = useState(false);
    const [percent, setPercent] = useState(0);

    const handleMonitorClick = () => {
        setIsHourglass(true);

        const timer = setTimeout(() => {
            navigate('/portfolio');
        }, 3000);

        return () => clearTimeout(timer);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent((prev) => (prev >= 100 ? 0 : Math.min(prev + Math.random() * 10, 100)));
        }, 500);

        return () => clearInterval(timer);
    }, []);

    return (
        <Container>
            <BuzzText text="Jeremy Girard" />

            <ScreenWrapper onClick={handleMonitorClick}>
                {isHourglass ? (
                    <MonitorWithHourglass />
                ) : (
                    <Monitor backgroundStyles={{ background: 'blue' }} />
                )}

                <ProgressBar value={Math.floor(percent)} />
            </ScreenWrapper>
        </Container>
    );
};

export default MainScreen;
