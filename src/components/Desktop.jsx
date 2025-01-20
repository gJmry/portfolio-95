import React, {useState} from 'react';
import { useWindowContext } from '../assets/scripts/WindowContext';
import { Explorer108 } from "@react95/icons";

export const Desktop = () => {
    const { windows, toggleWindow } = useWindowContext();

    const handleToggleIcon = (iconId) => {
        setActiveIcon((prev) => (prev === iconId ? null : iconId));
    };
    const [activeIcon, setActiveIcon] = useState(null);

    const handleDoubleClick = () => {
        toggleWindow('CV');
    };

    return (
        <div className="desktop-icons">
            <div
                className={activeIcon === 1 ? "active-icon" : "inactive-icon"}
                onClick={() => handleToggleIcon(1)}
                onDoubleClick={handleDoubleClick}
            >
                <Explorer108 variant="32x32_4" />
                <p>Recycle Bin</p>
            </div>
        </div>
    );
};
