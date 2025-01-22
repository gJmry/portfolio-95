import React, {useState} from 'react';
import {useWindowContext} from '../../assets/scripts/WindowContext.jsx';
import {WindowsComponent} from './WindowsComponent.jsx';
import {Button, GroupBox, Tab, TabBody, Tabs} from "react95";
import {Folder} from "@react95/icons";
import personalProjects from "../../assets/json/projects/personalProjects.json";
import universityProjects from "../../assets/json/projects/personalProjects.json";
import collaborativeProjects from "../../assets/json/projects/personalProjects.json";


export function WindowsProjects() {
    const {windows, toggleWindow} = useWindowContext();

    if (!windows.Projects) return null;

    const iconMap = {
        folder: <Folder variant="32x32_4"/>,
        workout: <span role="img" aria-label="workout">🏋️</span>
    };

    const [openProjects, setOpenProjects] = useState([]);

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
                <TabBody style={{height: 300, padding: '10px', overflow: 'auto'}}>
                    {projects[activeTab].map((project) => (
                        <GroupBox key={project.id} label={project.name}
                                  style={{marginBottom: '20px', marginTop: '20px'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                {iconMap[project.icon] || <span>❓</span>}
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
                    <div style={{textAlign: 'center', padding: '10px'}}>
                        <img
                            src={project.image}
                            alt={`${project.name} preview`}
                            style={{width: '100%', height: 'auto', marginBottom: '10px'}}
                        />
                        <p>{project.description}</p>
                    </div>
                </WindowsComponent>
            ))}
        </>
    );
}
