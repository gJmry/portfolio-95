import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import stepsData from '../assets/json/steps.json';

const STEP_INTERVAL_MS = 10;
const NAVIGATE_DELAY_MS = 400;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: greenyellow;
`;

const Terminal = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    text-align: left;
    font-size: 0.9rem;
    line-height: 1.4;
    width: 50%;
    max-height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
`;

const blink = keyframes`
    50% { opacity: 0; }
`;

const Cursor = styled.span`
    animation: ${blink} 0.8s step-end infinite;
`;

const StartupScreen = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const terminalRef = useRef(null);
    const timerRef = useRef(null);

    useEffect(() => {
        const steps = stepsData.steps;
        timerRef.current = setInterval(() => {
            setStep((prev) => {
                if (prev === steps.length) {
                    clearInterval(timerRef.current);
                    setTimeout(() => navigate('/main'), NAVIGATE_DELAY_MS);
                    return prev;
                }
                return prev + 1;
            });
        }, STEP_INTERVAL_MS);
        return () => clearInterval(timerRef.current);
    }, [navigate]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [step]);

    return (
        <Container>
            <Terminal ref={terminalRef}>
                {stepsData.steps.slice(0, step).map((text, idx) => (
                    <div key={idx}>{text}</div>
                ))}
                {step < stepsData.steps.length && <Cursor>|</Cursor>}
            </Terminal>
        </Container>
    );
};

export default StartupScreen;
