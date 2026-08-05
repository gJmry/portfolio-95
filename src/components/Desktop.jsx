import React, {useEffect, useRef, useState} from 'react';
import { useWindowContext } from '../assets/scripts/WindowContext';
import {
    CdMusic,
    Computer,
    FileText,
    FlyingThroughSpace100,
    FolderExe2,
    Joy102, RecycleFull,
    Star
} from "@react95/icons";

import onyl from "../assets/images/onyl.png"
import sncf from "../assets/images/sncf.png"

const GRID_SIZE = 90;
const ICON_SIZE = 70;

const iconsList = [
    { id: 1, label: 'Recycle Bin', windowName: 'RecycleBin', icon: <RecycleFull variant="32x32_4"/> },
    { id: 2, label: 'About Me', windowName: 'About', icon: <FileText variant="32x32_4"/> },
    { id: 3, label: 'Projects', windowName: 'Projects', icon: <FolderExe2 variant="32x32_4"/> },
    { id: 4, label: 'Education', windowName: 'Education', icon: <Computer variant="32x32_4"/> },
    { id: 5, label: 'Sport', windowName: 'Sport', icon: <Joy102 variant="32x32_4"/> },
    { id: 6, label: 'Music', windowName: 'Music', icon: <CdMusic variant="32x32_4"/> },
    { id: 7, label: 'Skills', windowName: 'Skills', icon: <Star variant="32x32_4"/> },
    { id: 8, label: 'Experiences', windowName: 'Experiences', icon: <FlyingThroughSpace100 variant="32x32_4"/> },
    { id: 9, label: 'Onyl Rocks', windowName: 'OnylRocks', icon: <img src={onyl} alt="Onyl Rocks" style={{width: "32px", height: "32px"}} /> },
    { id: 10, label: 'SNCF', windowName: 'Sncf', icon: <img src={sncf} alt="SNCF" style={{width: "48px", height: "25px"}} /> },
];

const defaultPositions = {
    1: { x: 0, y: 0 },
    2: { x: GRID_SIZE, y: 0 },
    3: { x: GRID_SIZE * 2, y: 0 },
    4: { x: GRID_SIZE * 3, y: 0 },
    5: { x: GRID_SIZE * 4, y: 0 },
    6: { x: 0, y: GRID_SIZE },
    7: { x: GRID_SIZE, y: GRID_SIZE },
    8: { x: GRID_SIZE * 2, y: GRID_SIZE },
    9: { x: GRID_SIZE * 3, y: GRID_SIZE },
    10: { x: GRID_SIZE * 4, y: GRID_SIZE },
};

export const Desktop = () => {
    const { toggleWindow } = useWindowContext();

    const [activeIcon, setActiveIcon] = useState(null);
    const [positions, setPositions] = useState(() => {
        const saved = localStorage.getItem('desktopPositions');
        return saved ? JSON.parse(saved) : defaultPositions;
    });
    const [draggingId, setDraggingId] = useState(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [draggedPosition, setDraggedPosition] = useState(null);
    const [initialPositions, setInitialPositions] = useState(positions);

    const containerRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('desktopPositions', JSON.stringify(positions));
    }, [positions]);

    const snapToGrid = (value) => {
        return Math.round(value / GRID_SIZE) * GRID_SIZE;
    };

    const getIconAtPosition = (x, y, excludeId = null, positionsMap = positions) => {
        for (const [id, pos] of Object.entries(positionsMap)) {
            const numId = parseInt(id);
            if (numId === excludeId) continue;

            const iconX = pos.x;
            const iconY = pos.y;
            if (x >= iconX && x < iconX + ICON_SIZE &&
                y >= iconY && y < iconY + ICON_SIZE) {
                return numId;
            }
        }
        return null;
    };

    const handleMouseDown = (e, iconId) => {
        if (e.button !== 0) return;
        e.preventDefault();

        setActiveIcon(iconId);
        setDraggingId(iconId);
        setInitialPositions(positions);
        setDraggedPosition(positions[iconId]);

        const rect = containerRef.current.getBoundingClientRect();
        const iconPos = positions[iconId];

        setDragOffset({
            x: e.clientX - rect.left - iconPos.x,
            y: e.clientY - rect.top - iconPos.y,
        });
    };

    const handleMouseMove = (e) => {
        if (draggingId === null || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const newX = snapToGrid(e.clientX - rect.left - dragOffset.x);
        const newY = snapToGrid(e.clientY - rect.top - dragOffset.y);

        setDraggedPosition({ x: Math.max(0, newX), y: Math.max(0, newY) });
    };

    const handleMouseUp = () => {
        if (draggingId !== null) {
            const collidingId = getIconAtPosition(draggedPosition.x, draggedPosition.y, draggingId, initialPositions);

            if (collidingId && collidingId !== draggingId) {

                const newPositions = { ...initialPositions };
                newPositions[draggingId] = initialPositions[collidingId];
                newPositions[collidingId] = initialPositions[draggingId];;

                setPositions(newPositions);
            } else {
                setPositions((prev) => ({
                    ...prev,
                    [draggingId]: draggedPosition,
                }));
            }
        }
        setDraggingId(null);
        setDraggedPosition(null);
        setInitialPositions(positions);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setActiveIcon(null);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [draggingId, dragOffset, draggedPosition, initialPositions]);

    return (
        <div className="desktop-container" ref={containerRef} style={{ position: 'relative' }}>
            {iconsList.map((iconData) => (
                <div
                    key={iconData.id}
                    className={activeIcon === iconData.id ? "active-icon desktop-icon" : "inactive-icon desktop-icon"}
                    onClick={() => setActiveIcon(activeIcon === iconData.id ? null : iconData.id)}
                    onDoubleClick={() => toggleWindow(iconData.windowName)}
                    onMouseDown={(e) => handleMouseDown(e, iconData.id)}
                    style={{
                        position: 'absolute',
                        left: `${draggingId === iconData.id ? draggedPosition?.x ?? positions[iconData.id]?.x ?? 0 : positions[iconData.id]?.x ?? 0}px`,
                        top: `${draggingId === iconData.id ? draggedPosition?.y ?? positions[iconData.id]?.y ?? 0 : positions[iconData.id]?.y ?? 0}px`,
                        cursor: draggingId === iconData.id ? 'grabbing' : 'grab',
                        transition: draggingId === iconData.id ? 'none' : 'all 0.1s ease',
                    }}
                >
                    {iconData.icon}
                    <p>{iconData.label}</p>
                </div>
            ))}
        </div>
    );
};
