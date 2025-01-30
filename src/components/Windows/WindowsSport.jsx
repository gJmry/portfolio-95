import React from 'react';
import {Button} from 'react95';
import {WindowsComponent} from './WindowsComponent';
import {useWindowContext} from "../../assets/scripts/WindowContext.jsx";

const handleCloseProject = (id) => {
    setOpenProjects((prev) => prev.filter((p) => p.id !== id));
};


export function WindowsSport() {
    const sportsList = [
        {
            "name": "Volleyball",
            "description": "My parents were volleyball coaches, I’ve been playing since I was a kid, and I really joined a club in 2024, continuing to play today.",
            "icon": "🏐"
        },
        {
            "name": "Badminton",
            "description": "I played badminton for 2 years, but the club struggled to manage, which quickly demotivated me.",
            "icon": "🏸"
        },
        {
            "name": "Gymnastics",
            "description": "I did gymnastics for 6 years when I was young, learning to understand my balance and body. However, I experienced a kind of burnout because I wasn’t that interested in the sport at that time, and I somewhat regret it now.",
            "icon": "🤸‍♂️"
        },
        {
            "name": "Swimming",
            "description": "I never really did swimming in a club, but I really enjoy the sport. I find the discipline very technical and at the same time, pleasant to practice.",
            "icon": "🏊‍♂️"
        }
    ];
    const {windows, toggleWindow} = useWindowContext();

    if (!windows.Sport) return null;

    return (
        <WindowsComponent
            title="Sports"
            onClose={() => toggleWindow('Sport')}>
            <div style={{padding: '1rem'}}>
                <ul>
                    {sportsList.map((sport, index) => (
                        <li key={index} style={{marginBottom: '1rem', fontSize: '1.1rem'}}>
                            <span style={{fontSize: '1.5rem', marginRight: '10px'}}>{sport.icon}</span>
                            <strong>{sport.name}</strong>
                            <p>{sport.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </WindowsComponent>
    );
};
