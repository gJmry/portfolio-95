import React, { useState } from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';
import { Button, GroupBox, Tab, TabBody, Tabs } from "react95";
import { Folder } from "@react95/icons";

export function WindowsProjects() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.Projects) return null;

    const [openProjects, setOpenProjects] = useState([]);

    const personalProjects = [
        {
            id: '1',
            name: 'Budget Tracker',
            description: 'A simple app to track expenses.',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: '2',
            name: 'Workout Planner',
            description: 'Organize your workouts effectively.',
            image: 'https://via.placeholder.com/150',
        },        {
            id: '1',
            name: 'Budget Tracker',
            description: 'A simple app to track expenses.',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: '2',
            name: 'Workout Planner',
            description: 'Organize your workouts effectively.',
            image: 'https://via.placeholder.com/150',
        },
    ];

    const collaborativeProjects = [
        {
            id: '3',
            name: 'Team Dashboard',
            description: 'Collaborate and manage tasks.',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: '4',
            name: 'Open Source Lib',
            description: 'A library for developers.',
            image: 'https://via.placeholder.com/150',
        },
    ];

    const universityProjects = [
        {
            id: '5',
            name: 'AI Research',
            description: 'Study on neural networks.',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: '6',
            name: 'Web Portfolio',
            description: 'Personal portfolio project.',
            image: 'https://via.placeholder.com/150',
        },
    ];

    const projects = [personalProjects, collaborativeProjects, universityProjects];

    const [activeTab, setActiveTab] = useState(0);

    const handleOpenProject = (project) => {
        setOpenProjects((prev) => [...prev, project]);
    };

    const handleCloseProject = (id) => {
        setOpenProjects((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <>
            <WindowsComponent
                title="Projects"
                onClose={() => toggleWindow('Projects')}
            >
                <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
                    <Tab value={0}>Personal</Tab>
                    <Tab value={1}>Collaborative</Tab>
                    <Tab value={2}>University</Tab>
                </Tabs>
                <TabBody style={{ height: 300, padding: '10px', overflow: 'auto' }}>
                    {projects[activeTab].map((project) => (
                        <GroupBox key={project.id} label={project.name} style={{ marginBottom: '20px', marginTop: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Folder variant="32x32_4" />
                                <div>
                                    <p>{project.description}</p>
                                    <Button onClick={() => handleOpenProject(project)}>
                                        Open
                                    </Button>
                                </div>
                            </div>
                        </GroupBox>
                    ))}
                </TabBody>
            </WindowsComponent>

            {openProjects.map((project) => (
                <WindowsComponent
                    key={project.id}
                    title={project.name}
                    onClose={() => handleCloseProject(project.id)}
                >
                    <div style={{ textAlign: 'center', padding: '10px' }}>
                        <img
                            src={project.image}
                            alt={`${project.name} preview`}
                            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                        />
                        <p>{project.description}</p>
                    </div>
                </WindowsComponent>
            ))}
        </>
    );
}
