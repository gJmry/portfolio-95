import React from 'react';
import styled, { keyframes } from 'styled-components';

const POSITION_OVERFLOW = 20;
const MIN_FONT_SIZE = 2;
const MAX_FONT_SIZE = 36;

const diagonalMove = keyframes`
    0% { transform: translate(0, 0); }
    50% { transform: translate(100px, -100px); }
    100% { transform: translate(0, 0); }
`;

const FloatingText = styled.p`
    position: absolute;
    color: rgba(255, 255, 255, 0.1);
    user-select: none;
    pointer-events: none;
    animation: ${diagonalMove} 5s infinite;
`;

const BackgroundWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const getRandomPosition = () => ({
    x: Math.random() * (100 + POSITION_OVERFLOW * 2) - POSITION_OVERFLOW,
    y: Math.random() * (100 + POSITION_OVERFLOW * 2) - POSITION_OVERFLOW,
});

const getRandomFontSize = () =>
    Math.random() * (MAX_FONT_SIZE - MIN_FONT_SIZE) + MIN_FONT_SIZE;

const FloatingWord = ({ text }) => {
    const { x, y } = getRandomPosition();
    const fontSize = getRandomFontSize();
    return (
        <FloatingText style={{ top: `${y}%`, left: `${x}%`, fontSize: `${fontSize}px` }}>
            {text}
        </FloatingText>
    );
};

const Background = ({ text = 'Jeremy Girard', count = 200 }) => (
    <BackgroundWrapper>
        {Array.from({ length: count }, (_, index) => (
            <FloatingWord key={index} text={text} />
        ))}
    </BackgroundWrapper>
);

export default Background;
