import React, { createContext, useContext, useState } from 'react';

const WindowContext = createContext(undefined);

export const WindowProvider = ({ children }) => {
    const [windows, setWindows] = useState({
        About: true,
        RecycleBin: false,
        Projects: false,
        Experiences: false,
        Music: false,
        Education: false,
        Sport: false,
        Skills: false,
        OnylRocks: false,
        Sncf: false,
    });

    const [windowOrder, setWindowOrder] = useState([
        'About', 'RecycleBin', 'Projects', 'Experiences', 'Music', 'Education', 'Sport', 'Skills', 'OnylRocks', 'Sncf'
    ]);

    const toggleWindow = (windowName) => {
        setWindows((prevWindows) => ({
            ...prevWindows,
            [windowName]: !prevWindows[windowName],
        }));
        
        focusWindow(windowName);
    };

    const focusWindow = (windowName) => {
        setWindowOrder((prevOrder) => {
            const filtered = prevOrder.filter((w) => w !== windowName);
            return [...filtered, windowName];
        });
    };

    const getZIndex = (windowName) => {
        const index = windowOrder.indexOf(windowName);
        return index === -1 ? 1000 : 1000 + index;
    };

    return (
        <WindowContext.Provider value={{ windows, toggleWindow, focusWindow, getZIndex }}>
            {children}
        </WindowContext.Provider>
    );
};

export const useWindowContext = () => useContext(WindowContext);
