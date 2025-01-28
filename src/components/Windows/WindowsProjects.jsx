import React, {useState} from 'react';
import {useWindowContext} from '../../assets/scripts/WindowContext.jsx';
import {WindowsComponent} from './WindowsComponent.jsx';
import {Button, GroupBox, Tab, TabBody, Tabs} from "react95";
import {ComputerFind, Folder} from "@react95/icons";
import personalProjects from "../../assets/json/projects/personalProjects.json";
import universityProjects from "../../assets/json/projects/universityProjects.json";
import collaborativeProjects from "../../assets/json/projects/collaborativeProjects.json";
import pokemon_logo from "../../assets/images/projects/pokemon_api.png"
import doom_guy from "../../assets/images/projects/doom_guy.png"
import open_book from "../../assets/images/projects/open_book.png"

export function WindowsProjects() {
    const images = {

    };

    const { windows, toggleWindow } = useWindowContext();

    if (!windows.Projects) return null;

    const iconMap = {
        folder: <Folder variant="32x32_4"/>,
        workout: <span role="img" aria-label="workout">🏋️</span>,
        computer_find: <ComputerFind variant="32x32_4"/>,
        doom: <img src={doom_guy} alt="Doom Logo" style={{width: '32px', height: '32px'}}/>,
        pokemon: <img src={pokemon_logo} alt="Pokemon Logo" style={{width: '32px', height: '32px'}}/>,
        book: <img src={open_book} alt="Book Logo" style={{width: '32px', height: '32px'}}/>,
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
                <TabBody style={{ height: 300, padding: '10px', overflow: 'auto' }}>
                    {projects[activeTab].map((project) => (
                        <GroupBox
                            key={project.id}
                            label={project.name}
                            style={{ marginBottom: '20px', marginTop: '20px' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                {iconMap[project.icon] || <span>❓</span>}
                                <div>
                                    <p>{project.small_description}</p>
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
                    toolbarButtons={[
                        {
                            label: (
                                <>
                                    <img
                                        src="https://img.icons8.com/ios11/512/FFFFFF/github.png"
                                        alt="GitHub Logo"
                                        style={{ width: '20px', height: '20px', marginRight: '5px' }}
                                    />
                                    Repository
                                </>
                            ),
                            props: {
                                onClick: () => window.open(project.github, '_blank'),
                            },
                        },
                    ]}
                >
                    <div style={{ textAlign: 'center', padding: '10px' }}>
                        {images[project.image] && (
                            <img
                                src={images[project.image]}
                                alt={`${project.name} preview`}
                                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                            />
                        )}

                        <p>{project.long_description}</p>
                    </div>
                </WindowsComponent>
            ))}
        </>
    );
}
