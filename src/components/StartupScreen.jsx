import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import stepsData from '../assets/json/steps.json';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    color: #00ff00;
    font-family: 'Courier New', monospace;
`;

const Terminal = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    text-align: left;
    font-size: 0.9rem;
    line-height: 1.4;
    width: 50%;
    max-height: 80vh;
    overflow: hidden;
    box-sizing: border-box;
`;

const blink = keyframes`
    50% {
        opacity: 0;
    }
`;

const Cursor = styled.span`
    animation: ${blink} 0.8s step-end infinite;
`;

const StartupScreen = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const terminalRef = useRef(null);

    useEffect(() => {
        const steps = stepsData.steps;
        const interval = setInterval(() => {
            setStep((prev) => {
                if (prev === steps.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        navigate('/main');
                    }, 1000);
                    return prev;
                }
                return prev + 1;
            });
        }, Math.floor(Math.random() * (100 - 100 + 1)) + 10);

        return () => clearInterval(interval);
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
