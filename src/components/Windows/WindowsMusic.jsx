import React from 'react';
import { WindowsComponent } from './WindowsComponent.jsx';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';

export function WindowsMusic() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.Music) return null;

    return (
        <WindowsComponent
            title="Music"
            onClose={() => toggleWindow('Music')}
            windowName="Music"
        >
            In construction!
        </WindowsComponent>
    );
}
