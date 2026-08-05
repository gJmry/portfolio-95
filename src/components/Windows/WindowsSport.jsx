import React from 'react';
import { WindowsComponent } from './WindowsComponent.jsx';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import sportsData from '../../assets/json/sports.json';

export function WindowsSport() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.Sport) return null;

    return (
        <WindowsComponent
            title="Sports"
            onClose={() => toggleWindow('Sport')}
            windowName="Sport"
        >
            <ul>
                {sportsData.map((sport) => (
                    <li key={sport.name} style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>{sport.icon}</span>
                        <strong>{sport.name}</strong>
                        <p>{sport.description}</p>
                    </li>
                ))}
            </ul>
        </WindowsComponent>
    );
}
