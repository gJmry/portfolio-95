import React, {useState} from 'react';
import {Button, Tab, TabBody, Tabs} from 'react95';
import styled from 'styled-components';
import {useWindowContext} from "../../assets/scripts/WindowContext.jsx";
import {WindowsComponent} from "./WindowsComponent.jsx";

const SkillButton = styled(Button)`
    margin: 5px;
    width: 180px;
    height: 60px;
    transition: all 0.1s;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({$active}) => $active && `
        box-shadow: inset 2px 2px #808080, inset -2px -2px white;
    `}
    &:hover {
        transform: translateY(-1px);
    }
`;

const CategoryTitle = styled.h3`
    margin-bottom: 15px;
    border-bottom: 1px solid #808080;
    padding-bottom: 5px;
`;

export function WindowsSkills() {
    const {windows, toggleWindow} = useWindowContext();
    if (!windows.Skills) return null;
    const [activeTab, setActiveTab] = useState(0);

    const skills = {
        frontend: [
            "TypeScript",
            "Tailwind CSS",
            "Styled Components",
            "Svelte",
            "React",
            "Vue.js",
            "Angular",
        ],
        backend: [
            "Java",
            "PHP",
            "Rust",
            "Database Design (SQL/NoSQL)",
            "GraphQL",
        ],
        devops: [
            "Docker",
            "Kubernetes",
            "CI/CD Pipelines",
            "Linux",
            "AWS",
        ],
    };

    function SkillsTabContent({title, skillsList}) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}>
                <div style={{
                    overflowY: 'auto',
                    flex: 1,
                    paddingRight: '5px'
                }}>
                    <CategoryTitle>{title}</CategoryTitle>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {skillsList.map((skill, index) => (
                            <SkillButton
                                key={index}
                            >
                                <div>{skill}</div>
                            </SkillButton>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <WindowsComponent
            title="💻 Skills"
            onClose={() => toggleWindow('Skills')}
            defaultPosition={{x: 100, y: 100, width: 700, height: 500}}
            windowName="Skills"
        >
            <Tabs value={activeTab} onChange={setActiveTab}>
                <Tab value={0}>Frontend</Tab>
                <Tab value={1}>Backend</Tab>
                <Tab value={2}>DevOps & Cloud</Tab>
            </Tabs>

            <TabBody style={{height: '100%', padding: '15px', overflowY: 'auto'}}>
                {activeTab === 0 && (
                    <SkillsTabContent
                        title="🎨 Frontend"
                        skillsList={skills.frontend}
                    />
                )}
                {activeTab === 1 && (
                    <SkillsTabContent
                        title="🛠 Backend"
                        skillsList={skills.backend}
                    />
                )}
                {activeTab === 2 && (
                    <SkillsTabContent
                        title="🚀 DevOps & Cloud"
                        skillsList={skills.devops}
                    />
                )}
            </TabBody>

        </WindowsComponent>
    );
}