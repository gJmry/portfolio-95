import React, { useState } from 'react';
import { WindowsComponent } from './WindowsComponent';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { Button, Tab, TabBody, Tabs } from 'react95';
import styled from 'styled-components';

export function WindowsMusic() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.Music) return null;

    const [activeTab, setActiveTab] = useState(0);

    return (
        <WindowsComponent title="Music" onClose={() => toggleWindow('Music')}>
            In construction !
        </WindowsComponent>
    );
}
