import React, {useEffect, useRef, useState} from 'react';
import { useWindowContext } from '../assets/scripts/WindowContext';
import {
    CdMusic,
    Computer,
    FileText,
    FlyingThroughSpace100,
    FolderExe2,
    Joy102,
    RecycleFull,
    Star
} from "@react95/icons";

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
                <RecycleFull variant="32x32_4"/>
                <p>Recycle Bin</p>
            </div>
            <div
                className={activeIcon === 2 ? "active-icon desktop-icon" : "inactive-icon desktop-icon"}
                onClick={() => handleToggleIcon(2)}
                onDoubleClick={() => handleDoubleClick('About')}
            >
                <FileText variant="32x32_4"/>
                <p>About Me</p>
            </div>
            <div
                className={activeIcon === 3 ? "active-icon desktop-icon" : "inactive-icon desktop-icon"}
                onClick={() => handleToggleIcon(3)}
                onDoubleClick={() => handleDoubleClick('Projects')}
            >
                <FolderExe2 variant="32x32_4"/>
                <p>Projects</p>
            </div>
            <div
                className={activeIcon === 4 ? "active-icon desktop-icon" : "inactive-icon desktop-icon"}
                onClick={() => handleToggleIcon(4)}
                onDoubleClick={() => handleDoubleClick('Education')}
            >
                <Computer variant="32x32_4"/>
                <p>Education</p>
            </div>
            <div
                className={activeIcon === 5 ? "active-icon desktop-icon" : "inactive-icon desktop-icon"}
                onClick={() => handleToggleIcon(5)}
                onDoubleClick={() => handleDoubleClick('Sport')}
            >
                <Joy102 variant="32x32_4"/>
                <p>Sport</p>
            </div>
            <div
                className={activeIcon === 6 ? "active-icon desktop-icon" : "inactive-icon desktop-icon"}
                onClick={() => handleToggleIcon(6)}
                onDoubleClick={() => handleDoubleClick('Music')}
            >
                <CdMusic variant="32x32_4"/>
                <p>Music</p>
            </div>
            <div
                className={activeIcon === 7 ? "active-icon desktop-icon" : "inactive-icon desktop-icon"}
                onClick={() => handleToggleIcon(7)}
                onDoubleClick={() => handleDoubleClick('Skills')}
            >
                <Star variant="32x32_4"/>
                <p>Skills</p>
            </div>
            <div
                className={activeIcon === 8 ? "active-icon desktop-icon" : "inactive-icon desktop-icon"}
                onClick={() => handleToggleIcon(8)}
                onDoubleClick={() => handleDoubleClick('Experiences')}
            >
                <FlyingThroughSpace100 variant="32x32_4"/>
                <p>Experiences</p>
            </div>
        </div>
    );
};
