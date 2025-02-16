import React, { createContext, useContext, useState } from 'react';

const WindowContext = createContext(undefined);

export const WindowProvider = ({ children }) => {
    const [windows, setWindows] = useState({
        About: false,
        RecycleBin: false,
        Projects: false,
        Experiences: false,
        Music: false,
        Education: false,
        Sport: false,
        Skills: false,
    });

    const toggleWindow = (windowName) => {
        setWindows((prevWindows) => ({
            ...prevWindows,
            [windowName]: !prevWindows[windowName],
        }));
    };

    return (
        <WindowContext.Provider value={{ windows, toggleWindow }}>
            {children}
        </WindowContext.Provider>
    );
};

export const useWindowContext = () => useContext(WindowContext);
