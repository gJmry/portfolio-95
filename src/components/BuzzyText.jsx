import React, { useState } from 'react';
import '../assets/styles/buzztext.css';

export const BuzzText = ({ text }) => {
    return (
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
};

const App = () => {
    const [text, setText] = useState("BUZZZZZZZZZ...");

    return (
        <div className="App">
            <BuzzText text={text} />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Entrez du texte"
            />
        </div>
    );
};

export default App;
