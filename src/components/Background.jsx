import React from 'react';
import styled, { keyframes } from 'styled-components';

const diagonalMove = keyframes`
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(100px, -100px);
    }
    100% {
        transform: translate(0, 0);
    }
`;

const Text = styled.p`
    position: absolute;
    color: rgba(255, 255, 255, 0.1);
    user-select: none;
    pointer-events: none;
    animation: ${diagonalMove} 5s infinite ;
`;

const getRandomPosition = () => {
    const x = (Math.random() * 120)-20;
    const y = (Math.random() * 120)-20;
    return { x, y };
};

const getRandomFontSize = () => {
    const minSize = 2;
    const maxSize = 36;
    return Math.random() * (maxSize - minSize) + minSize;
};

const RandomText = ({ text }) => {
    const { x, y } = getRandomPosition();
    const fontSize = getRandomFontSize();
    return <Text style={{ top: `${y}%`, left: `${x}%`, fontSize: `${fontSize}px` }}>{text}</Text>;
};

const Background = ({ text = "Jérémy Girard", count = 200 }) => {
    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            {Array.from({ length: count }).map((_, index) => (
                <RandomText key={index} text={text} />
            ))}
        </div>
    );
};

export default Background;
