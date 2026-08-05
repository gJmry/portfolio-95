import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Monitor, ProgressBar } from 'react95';
import MonitorWithHourglass from './MonitorAndHourglass.jsx';
import Background from './Background.jsx';
import { useNavigate } from 'react-router-dom';

const PROGRESS_STEP = 5;
const PROGRESS_INTERVAL_MS = 100;
const NAVIGATE_DELAY_MS = 500;

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

const MonitorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const MonitorFrame = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
`;

const MainScreen = () => {
    const navigate = useNavigate();
    const [showHourglass, setShowHourglass] = useState(false);
    const [progress, setProgress] = useState(0);
    const timerRef = useRef(null);

    const startProgress = () => {
        if (timerRef.current) return;
        setShowHourglass(true);
        timerRef.current = setInterval(() => {
            setProgress((prev) => {
                const next = Math.min(prev + PROGRESS_STEP, 100);
                if (next === 100) {
                    clearInterval(timerRef.current);
                    setTimeout(() => navigate('/portfolio'), NAVIGATE_DELAY_MS);
                }
                return next;
            });
        }, PROGRESS_INTERVAL_MS);
    };

    useEffect(() => () => clearInterval(timerRef.current), []);

    return (
        <Container>
            <Background text="Jeremy Girard" />
            <p>Click on the Monitor</p>
            <MonitorWrapper onClick={startProgress}>
                {showHourglass ? (
                    <MonitorWithHourglass />
                ) : (
                    <MonitorFrame>
                        <Monitor className="retro-monitor" backgroundStyles={{ background: 'blue' }} />
                    </MonitorFrame>
                )}
                <ProgressBar value={Math.floor(progress)} />
            </MonitorWrapper>
        </Container>
    );
};

export default MainScreen;
