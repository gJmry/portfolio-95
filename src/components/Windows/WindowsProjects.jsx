import React, { useState } from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';
import { Button, GroupBox, Tab, Tabs } from 'react95';
import styled from 'styled-components';
import personalProjects from '../../assets/json/projects/personalProjects.json';
import universityProjects from '../../assets/json/projects/universityProjects.json';
import collaborativeProjects from '../../assets/json/projects/collaborativeProjects.json';
import { ComputerFind, Earth, FileTextSettings, Folder, Joy110 } from '@react95/icons';
import pokemonLogo from '../../assets/images/projects/pokemon_api.png';
import doomGuy from '../../assets/images/projects/doom_guy.png';
import openBook from '../../assets/images/projects/open_book.png';
import dodeci from '../../assets/images/projects/dodeci.png';
import ndli from '../../assets/images/projects/NDLI_2024.png';
import cLogo from '../../assets/images/projects/c.png';
import coinche from '../../assets/images/projects/coinche.png';
import maki from '../../assets/images/projects/maki.png';
import kebab from '../../assets/images/projects/kebab.png';

const ProjectsWrapper = styled.div`
    height: 500px;
    width: 500px;
    display: flex;
    flex-direction: column;
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 12px;
    padding: 15px;
    overflow-y: auto;
    flex: 1;
`;

const ProjectCard = styled(GroupBox)`
    min-height: 140px;
    display: flex;
    flex-direction: column;
`;

const ProjectContent = styled.div`
    display: flex;
    gap: 15px;
    padding: 12px;
    height: 100%;
`;

const ProjectIconWrapper = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border: 2px inset #c0c0c0;

    img {
        max-width: 48px;
        max-height: 48px;
        object-fit: contain;
    }
`;

const ProjectInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100px;
`;

const ProjectDescription = styled.div`
    font-size: 16px;
    line-height: 1.4;
    margin-bottom: 12px;
    flex: 1;
    font-weight: 500;
`;

const ProjectActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;

const TabHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 15px;
    border-bottom: 1px solid #808080;
    font-weight: bold;
    font-size: 12px;
`;

const ProjectCount = styled.span`
    color: white;
    padding: 2px 6px;
    font-size: 11px;
`;

const DetailWindow = styled.div`
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const DetailHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-bottom: 2px inset #c0c0c0;
`;

const DetailIconWrapper = styled.div`
    width: 72px;
    height: 72px;
    border: 2px inset #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    flex: 0 0 auto;

    img {
        max-width: 64px;
        max-height: 64px;
        object-fit: contain;
    }
`;

const DetailInfo = styled.div`
    flex: 1;
`;

const DetailTitle = styled.h2`
    margin: 0 0 8px 0;
    font-size: 18px;
`;

const DetailBody = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
`;

const DetailDescription = styled.div`
    font-size: 18px;
    line-height: 1.6;
    color: white;
    margin-bottom: 20px;
    min-height: 150px;
`;

const DetailFooter = styled.div`
    padding: 15px 20px;
    border-top: 2px inset #c0c0c0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const iconMap = {
    folder: <Folder variant="32x32_4" />,
    workout: <span role="img" aria-label="workout" style={{ fontSize: '40px' }}>🏋️</span>,
    computer_find: <ComputerFind variant="32x32_4" />,
    doom: <img src={doomGuy} alt="Doom Logo" />,
    pokemon: <img src={pokemonLogo} alt="Pokemon Logo" />,
    book: <img src={openBook} alt="Book Logo" />,
    dodeci: <img src={dodeci} alt="Dodeci Logo" />,
    ndli: <img src={ndli} alt="NDLI Logo" />,
    c: <img src={cLogo} alt="C Logo" />,
    coinche: <img src={coinche} alt="Coinche Logo" />,
    maki: <img src={maki} alt="Maki Malin Logo" />,
    kebab: <img src={kebab} alt="Kebab Logo" />,
    globe: <Earth variant="32x32_4" />,
    gamepad: <Joy110 variant="32x32_4" />,
    erp: <FileTextSettings variant="32x32_4" />,
};

const projectTabs = [
    { value: 0, label: 'Personal', data: personalProjects, title: 'Personal Projects' },
    { value: 1, label: 'Collaborative', data: collaborativeProjects, title: 'Collaborative Projects' },
    { value: 2, label: 'University', data: universityProjects, title: 'University Projects' },
];

const getDetailOffset = (index) => index * 35;

export function WindowsProjects() {
    const { windows, toggleWindow } = useWindowContext();
    const [openProjects, setOpenProjects] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    if (!windows.Projects) return null;

    const activeTabData = projectTabs[activeTab];

    const handleOpenProject = (project) => {
        const alreadyOpen = openProjects.some((p) => p.id === project.id);
        if (!alreadyOpen) setOpenProjects((prev) => [...prev, project]);
    };

    const handleCloseProject = (id) => setOpenProjects((prev) => prev.filter((p) => p.id !== id));

    return (
        <>
            <WindowsComponent
                title="Projects"
                onClose={() => toggleWindow('Projects')}
                defaultPosition={{ x: 150, y: 80, width: 900, height: 650 }}
                windowName="Projects"
            >
                <ProjectsWrapper>
                    <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
                        {projectTabs.map(({ value, label, data }) => (
                            <Tab key={value} value={value}>{label} ({data.length})</Tab>
                        ))}
                    </Tabs>
                    <TabHeader>
                        <span>{activeTabData.title}</span>
                        <ProjectCount>{activeTabData.data.length} projects</ProjectCount>
                    </TabHeader>
                    <ProjectsGrid>
                        {activeTabData.data.map((project) => (
                            <ProjectCard key={project.id} label={project.name}>
                                <ProjectContent>
                                    <ProjectIconWrapper>
                                        {iconMap[project.icon] || <span style={{ fontSize: '40px' }}>❓</span>}
                                    </ProjectIconWrapper>
                                    <ProjectInfo>
                                        <ProjectDescription>{project.small_description}</ProjectDescription>
                                        <ProjectActions>
                                            <Button onClick={() => handleOpenProject(project)} size="sm">
                                                Open Details
                                            </Button>
                                        </ProjectActions>
                                    </ProjectInfo>
                                </ProjectContent>
                            </ProjectCard>
                        ))}
                    </ProjectsGrid>
                </ProjectsWrapper>
            </WindowsComponent>

            {openProjects.map((project, index) => (
                <WindowsComponent
                    key={project.id}
                    title={project.name}
                    onClose={() => handleCloseProject(project.id)}
                    defaultPosition={{
                        x: 200 + getDetailOffset(index),
                        y: 120 + getDetailOffset(index),
                        width: 700,
                        height: 600,
                    }}
                >
                    <DetailWindow>
                        <DetailHeader>
                            <DetailIconWrapper>
                                {iconMap[project.icon] || <span style={{ fontSize: '56px' }}>❓</span>}
                            </DetailIconWrapper>
                            <DetailInfo>
                                <DetailTitle>{project.name}</DetailTitle>
                            </DetailInfo>
                        </DetailHeader>
                        <DetailBody>
                            <DetailDescription>{project.long_description}</DetailDescription>
                        </DetailBody>
                        <DetailFooter>
                            <div style={{ fontSize: '11px', color: '#666' }}>
                                Project Details • {project.name}
                            </div>
                            <ActionGroup>
                                {project.github && (
                                    <Button onClick={() => window.open(project.github, '_blank')}>
                                        View GitHub
                                    </Button>
                                )}
                                <Button onClick={() => handleCloseProject(project.id)}>Close</Button>
                            </ActionGroup>
                        </DetailFooter>
                    </DetailWindow>
                </WindowsComponent>
            ))}
        </>
    );
}