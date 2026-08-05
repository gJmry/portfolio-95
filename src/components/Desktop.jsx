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

import onylImg from '../assets/images/onyl.png';
import sncfImg from '../assets/images/sncf.png';

const GRID_SIZE = 90;
const ICON_SIZE = 70;
const DEFAULT_START_X = GRID_SIZE * 2;
const DEFAULT_START_Y = GRID_SIZE;

const iconsList = [
    { id: 1, label: 'Recycle Bin', windowName: 'RecycleBin', icon: <RecycleFull variant="32x32_4" /> },
    { id: 2, label: 'About Me', windowName: 'About', icon: <FileText variant="32x32_4" /> },
    { id: 3, label: 'Projects', windowName: 'Projects', icon: <FolderExe2 variant="32x32_4" /> },
    { id: 4, label: 'Education', windowName: 'Education', icon: <Computer variant="32x32_4" /> },
    { id: 5, label: 'Sport', windowName: 'Sport', icon: <Joy102 variant="32x32_4" /> },
    { id: 6, label: 'Music', windowName: 'Music', icon: <CdMusic variant="32x32_4" /> },
    { id: 7, label: 'Skills', windowName: 'Skills', icon: <Star variant="32x32_4" /> },
    { id: 8, label: 'Experiences', windowName: 'Experiences', icon: <FlyingThroughSpace100 variant="32x32_4" /> },
    { id: 9, label: 'Onyl Rocks', windowName: 'OnylRocks', icon: <img src={onylImg} alt="Onyl Rocks" style={{ width: '32px', height: '32px' }} /> },
    { id: 10, label: 'SNCF', windowName: 'Sncf', icon: <img src={sncfImg} alt="SNCF" style={{ width: '48px', height: '25px' }} /> },
];

const defaultPositions = {
    1: { x: DEFAULT_START_X, y: DEFAULT_START_Y },
    2: { x: DEFAULT_START_X, y: DEFAULT_START_Y + GRID_SIZE },
    3: { x: DEFAULT_START_X, y: DEFAULT_START_Y + GRID_SIZE * 2 },
    4: { x: DEFAULT_START_X, y: DEFAULT_START_Y + GRID_SIZE * 3 },
    5: { x: DEFAULT_START_X + GRID_SIZE, y: DEFAULT_START_Y },
    6: { x: DEFAULT_START_X + GRID_SIZE, y: DEFAULT_START_Y + GRID_SIZE },
    7: { x: DEFAULT_START_X + GRID_SIZE, y: DEFAULT_START_Y + GRID_SIZE * 2 },
    8: { x: DEFAULT_START_X + GRID_SIZE, y: DEFAULT_START_Y + GRID_SIZE * 3 },
    9: { x: DEFAULT_START_X + GRID_SIZE * 2, y: DEFAULT_START_Y },
    10: { x: DEFAULT_START_X + GRID_SIZE * 2, y: DEFAULT_START_Y + GRID_SIZE },
};

const snapToGrid = (value) => Math.round(value / GRID_SIZE) * GRID_SIZE;

const findIconAtPosition = (x, y, excludeId, positionsMap) => {
    for (const [id, pos] of Object.entries(positionsMap)) {
        const numId = parseInt(id);
        if (numId === excludeId) continue;
        const withinX = x >= pos.x && x < pos.x + ICON_SIZE;
        const withinY = y >= pos.y && y < pos.y + ICON_SIZE;
        if (withinX && withinY) return numId;
    }
    return null;
};

const getIconLeft = (iconData, draggingId, draggedPosition, positions) => {
    if (draggingId === iconData.id) return draggedPosition?.x ?? positions[iconData.id]?.x ?? 0;
    return positions[iconData.id]?.x ?? 0;
};

const getIconTop = (iconData, draggingId, draggedPosition, positions) => {
    if (draggingId === iconData.id) return draggedPosition?.y ?? positions[iconData.id]?.y ?? 0;
    return positions[iconData.id]?.y ?? 0;
};

export const Desktop = () => {
    const { toggleWindow } = useWindowContext();
    const [activeIcon, setActiveIcon] = useState(null);
    const [positions, setPositions] = useState(defaultPositions);
    const [draggingId, setDraggingId] = useState(null);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [draggedPosition, setDraggedPosition] = useState(null);
    const [initialPositions, setInitialPositions] = useState(defaultPositions);
    const containerRef = useRef(null);

    const handleMouseDown = (e, iconId) => {
        if (e.button !== 0) return;
        e.preventDefault();
        setActiveIcon(iconId);
        setDraggingId(iconId);
        setInitialPositions(positions);
        setDraggedPosition(positions[iconId]);
        const rect = containerRef.current.getBoundingClientRect();
        setDragOffset({
            x: e.clientX - rect.left - positions[iconId].x,
            y: e.clientY - rect.top - positions[iconId].y,
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
        if (draggingId === null) return;
        const collidingId = findIconAtPosition(
            draggedPosition.x,
            draggedPosition.y,
            draggingId,
            initialPositions
        );
        if (collidingId && collidingId !== draggingId) {
            setPositions((prev) => ({
                ...prev,
                [draggingId]: initialPositions[collidingId],
                [collidingId]: initialPositions[draggingId],
            }));
        } else {
            setPositions((prev) => ({ ...prev, [draggingId]: draggedPosition }));
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
                    className={activeIcon === iconData.id ? 'active-icon desktop-icon' : 'inactive-icon desktop-icon'}
                    onClick={() => setActiveIcon(activeIcon === iconData.id ? null : iconData.id)}
                    onDoubleClick={() => toggleWindow(iconData.windowName)}
                    onMouseDown={(e) => handleMouseDown(e, iconData.id)}
                    style={{
                        position: 'absolute',
                        left: `${getIconLeft(iconData, draggingId, draggedPosition, positions)}px`,
                        top: `${getIconTop(iconData, draggingId, draggedPosition, positions)}px`,
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
