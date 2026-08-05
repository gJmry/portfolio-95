import React, { useState } from 'react';
import { Tab, TabBody, Tabs } from 'react95';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';
import { SkillsTabContent } from './SkillsTabContent.jsx';
import skillsData from '../../assets/json/skills.json';

const skillTabs = [
    { value: 0, label: 'Frontend', title: 'Frontend', key: 'frontend' },
    { value: 1, label: 'Backend', title: 'Backend', key: 'backend' },
    { value: 2, label: 'DevOps & Cloud', title: 'DevOps & Cloud', key: 'devops' },
];

export function WindowsSkills() {
    const { windows, toggleWindow } = useWindowContext();
    const [activeTab, setActiveTab] = useState(0);

    if (!windows.Skills) return null;

    const activeTabData = skillTabs[activeTab];

    return (
        <WindowsComponent
            title="Skills"
            onClose={() => toggleWindow('Skills')}
            defaultPosition={{ x: 100, y: 100, width: 700, height: 500 }}
            windowName="Skills"
        >
            <Tabs value={activeTab} onChange={setActiveTab}>
                {skillTabs.map(({ value, label }) => (
                    <Tab key={value} value={value}>{label}</Tab>
                ))}
            </Tabs>
            <TabBody style={{ height: '100%', padding: '15px', overflowY: 'auto' }}>
                <SkillsTabContent
                    title={activeTabData.title}
                    skills={skillsData[activeTabData.key]}
                />
            </TabBody>

        </WindowsComponent>
    );
}