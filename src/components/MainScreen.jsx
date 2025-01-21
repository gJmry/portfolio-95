import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Monitor, ProgressBar } from 'react95';
import { BuzzText } from './BuzzyText.jsx';
import MonitorWithHourglass from './MonitorAndHourglass.jsx';
import Background from './Background.jsx'; // Import du composant
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
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
    const [isProgressing, setIsProgressing] = useState(false);

    const handleMonitorClick = () => {
        if (!isProgressing) {
            setIsHourglass(true);
            setIsProgressing(true);
        }
    };

    useEffect(() => {
        let timer;

        if (isProgressing) {
            timer = setInterval(() => {
                setPercent((prev) => {
                    const nextValue = Math.min(prev + 5, 100);
                    if (nextValue === 100) {
                        clearInterval(timer);
                        setTimeout(() => {
                            navigate('/portfolio');
                        }, 500); // Petite pause avant la redirection
                    }
                    return nextValue;
                });
            }, 100);
        }

        return () => clearInterval(timer);
    }, [isProgressing, navigate]);

    return (
        <Container>
            <Background text="Jérémy Girard" />
            <p> Click on the Monitor</p>
            <ScreenWrapper onClick={handleMonitorClick}>
                {isHourglass ? (
                    <MonitorWithHourglass />
                ) : (
                    <div style={{position: 'relative', width: '300px', height: '200px'}}>
                        <Monitor className="retro-monitor" backgroundStyles={{background: 'blue'}}/>
                    </div>
                )}
                <ProgressBar value={Math.floor(percent)}/>
            </ScreenWrapper>
        </Container>
    );
};

export default MainScreen;
