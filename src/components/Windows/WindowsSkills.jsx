import React, {useState} from 'react';
import {WindowsComponent} from './WindowsComponent';
import {useWindowContext} from '../../assets/scripts/WindowContext.jsx';
import {Button, Tab, TabBody, Tabs, List, ListItem} from 'react95';
import styled from 'styled-components';

const SkillButton = styled(Button)`
    margin: 5px;
    width: 150px;
    height: 50px;
`;

export function WindowsSkills() {
    const {windows, toggleWindow} = useWindowContext();
    if (!windows.Skills) return null;

    const [activeTab, setActiveTab] = useState(0);

    return (
        <WindowsComponent title="💻 Skills" onClose={() => toggleWindow('Skills')}>
            <Tabs value={activeTab} onChange={setActiveTab}>
                <Tab value={0}>Frontend</Tab>
                <Tab value={1}>Backend</Tab>
                <Tab value={2}>DevOps</Tab>
                <Tab value={3}>Soft Skills</Tab>
            </Tabs>

            <TabBody style={{height: 300, padding: '10px', overflow: 'auto'}}>
                {activeTab === 0 && (
                    <div>
                        <h3>🎨 Frontend Technologies</h3>
                        <SkillButton>⚛️ React.js</SkillButton>
                        <SkillButton>🔥 Svelte</SkillButton>
                        <SkillButton>🟩 Vue.js</SkillButton>
                        <SkillButton>🎨 Tailwind CSS</SkillButton>
                        <SkillButton>🅰️ Angular</SkillButton>
                    </div>
                )}

                {activeTab === 1 && (
                    <div>
                        <h3>🛠 Backend Technologies</h3>
                        <SkillButton>🌿 Node.js</SkillButton>
                        <SkillButton>🕸 Symfony</SkillButton>
                        <SkillButton>🦀 Rust</SkillButton>
                        <SkillButton>☕ Spring Boot</SkillButton>
                        <SkillButton>🐹 Go</SkillButton>
                    </div>
                )}

                {activeTab === 2 && (
                    <div>
                        <h3>🚀 DevOps & Other Skills</h3>
                        <SkillButton>🔄 CI/CD</SkillButton>
                        <SkillButton>🐳 Docker</SkillButton>
                        <SkillButton>📦 Kubernetes</SkillButton>
                        <SkillButton>♻️ Refactoring</SkillButton>
                        <SkillButton>🧠 System Design</SkillButton>
                    </div>
                )}

                {activeTab === 3 && (
                    <div>
                        <h3>💡 Soft Skills</h3>
                        <SkillButton>🤝 Teamwork</SkillButton>
                        <SkillButton>🎨 Creativity & UI</SkillButton>
                        <SkillButton>🎯 Problem-Solving</SkillButton>
                        <SkillButton>🚀 Adaptability</SkillButton>
                        <SkillButton>🔍 Attention to Detail</SkillButton>
                        <SkillButton>🗣️ Communication Skills</SkillButton>
                        <SkillButton>📢 Public Speaking</SkillButton>
                    </div>

                )}
            </TabBody>
        </WindowsComponent>
    );
}
