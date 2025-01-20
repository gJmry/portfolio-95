import React, {useEffect, useRef, useState} from 'react';
import { useWindowContext } from '../assets/scripts/WindowContext';
import {Explorer108, FileText} from "@react95/icons";

export const Desktop = () => {
    const { toggleWindow } = useWindowContext();

    const [activeIcon, setActiveIcon] = useState(null);

    const handleToggleIcon = (iconId) => {
        setActiveIcon((prev) => (prev === iconId ? null : iconId));
    };

    const handleDoubleClick = (windowName) => {
        toggleWindow(windowName);
    };

    const containerRef = useRef(null);


    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setActiveIcon(null);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="desktop-container" ref={containerRef}>
            <div
                className={activeIcon === 1 ? "active-icon desktop-icon" : "inactive-icon desktop-icon"}
                onClick={() => handleToggleIcon(1)}
                onDoubleClick={() => handleDoubleClick('RecycleBin')}
            >
                <Explorer108 variant="32x32_4" />
                <p>Recycle Bin</p>
            </div>
            <div
                className={activeIcon === 2 ? "active-icon desktop-icon" : "inactive-icon desktop-icon"}
                onClick={() => handleToggleIcon(2)}
                onDoubleClick={() => handleDoubleClick('CV')}
            >
                <FileText variant="32x32_4"/>
                <p>Curriculum Vitae</p>
            </div>
        </div>
    );
};
