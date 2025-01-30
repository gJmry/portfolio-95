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
            <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
                <Tab value={0}>My Instruments</Tab>
                <Tab value={1}>My Musical Taste</Tab>
            </Tabs>

            <TabBody style={{ height: 300, padding: '10px', overflow: 'auto' }}>
                {activeTab === 0 && (
                    <div>
                        <p>douze</p>
                    </div>
                )}

                {activeTab === 1 && (
                    <div>
                        <p>douze</p>
                    </div>
                )}
            </TabBody>
        </WindowsComponent>
    );
}
