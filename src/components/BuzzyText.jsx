import React from 'react';
import '../assets/styles/buzztext.css';

export const BuzzText = ({ text }) => (
    <div className="buzz_wrapper">
        <div className="text">
            {Array.from(text).map((char, index) => (
                <span key={index} className={char === ' ' ? 'space' : ''}>
                    {char}
                </span>
            ))}
        </div>
        <div className="scanline"></div>
    </div>
);
