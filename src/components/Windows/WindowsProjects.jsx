import React, {useState} from 'react';
import {useWindowContext} from '../../assets/scripts/WindowContext.jsx';
import {WindowsComponent} from './WindowsComponent.jsx';
import {Button, GroupBox, Tab, TabBody, Tabs, Separator, Panel} from "react95";
import {ComputerFind, Folder} from "@react95/icons";
import personalProjects from "../../assets/json/projects/personalProjects.json";
import universityProjects from "../../assets/json/projects/universityProjects.json";
import collaborativeProjects from "../../assets/json/projects/collaborativeProjects.json";
import pokemon_logo from "../../assets/images/projects/pokemon_api.png"
import doom_guy from "../../assets/images/projects/doom_guy.png"
import open_book from "../../assets/images/projects/open_book.png"
import dodeci from "../../assets/images/projects/dodeci.png"
import ndli from "../../assets/images/projects/NDLI_2024.png"
import c from "../../assets/images/projects/c.png"
import coinche from "../../assets/images/projects/coinche.png"
import maki from "../../assets/images/projects/maki.png"
import kebab from "../../assets/images/projects/kebab.png"
import styled from 'styled-components';

const ProjectsContainer = styled.div`
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

const ProjectIcon = styled.div`
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

const ProjectCounter = styled.span`
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

const DetailIcon = styled.div`
    width: 72px;
    height: 72px;
    border: 2px inset #c0c0c0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

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

const DetailContent = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
`;

const DetailDescription = styled.div`
    padding: 20px;
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

export function WindowsProjects() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.Projects) return null;

    const iconMap = {
        folder: <Folder variant="32x32_4"/>,
        workout: <span role="img" aria-label="workout" style={{fontSize: '40px'}}>🏋️</span>,
        computer_find: <ComputerFind variant="32x32_4"/>,
        doom: <img src={doom_guy} alt="Doom Logo"/>,
        pokemon: <img src={pokemon_logo} alt="Pokemon Logo"/>,
        book: <img src={open_book} alt="Book Logo"/>,
        dodeci: <img src={dodeci} alt="Dodeci Logo"/>,
        ndli: <img src={ndli} alt="NDLI Logo"/>,
        c: <img src={c} alt="C Logo"/>,
        coinche: <img src={coinche} alt="Coinche Logo"/>,
        maki: <img src={maki} alt="Maki Malin Logo"/>,
        kebab: <img src={kebab} alt="Kebab Logo"/>,
    };

    const [openProjects, setOpenProjects] = useState([]);
    const projects = [personalProjects, collaborativeProjects, universityProjects];
    const projectTitles = ['Personal Projects', 'Collaborative Projects', 'University Projects'];
    const [activeTab, setActiveTab] = useState(0);

    const handleOpenProject = (project) => {
        if (!openProjects.find(p => p.id === project.id)) {
            setOpenProjects((prev) => [...prev, project]);
        }
    };

    const handleCloseProject = (id) => {
        setOpenProjects((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <>
            <WindowsComponent
                title="💼 Projects Portfolio"
                onClose={() => toggleWindow('Projects')}
                defaultPosition={{ x: 150, y: 80, width: 900, height: 650 }}
            >
                <ProjectsContainer>
                    <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
                        <Tab value={0}>Personal ({personalProjects.length})</Tab>
                        <Tab value={1}>Collaborative ({collaborativeProjects.length})</Tab>
                        <Tab value={2}>University ({universityProjects.length})</Tab>
                    </Tabs>

                    <TabHeader>
                        <span>{projectTitles[activeTab]}</span>
                        <ProjectCounter>{projects[activeTab].length} projects</ProjectCounter>
                    </TabHeader>

                    <ProjectsGrid>
                        {projects[activeTab].map((project) => (
                            <ProjectCard
                                key={project.id}
                                label={project.name}
                            >
                                <ProjectContent>
                                    <ProjectIcon>
                                        {iconMap[project.icon] || <span style={{fontSize: '40px'}}>❓</span>}
                                    </ProjectIcon>
                                    <ProjectInfo>
                                        <ProjectDescription>
                                            {project.small_description}
                                        </ProjectDescription>
                                        <ProjectActions>
                                            <Button
                                                onClick={() => handleOpenProject(project)}
                                                size="sm"
                                            >
                                                📖 Open Details
                                            </Button>
                                        </ProjectActions>
                                    </ProjectInfo>
                                </ProjectContent>
                            </ProjectCard>
                        ))}
                    </ProjectsGrid>
                </ProjectsContainer>
            </WindowsComponent>

            {openProjects.map((project) => (
                <WindowsComponent
                    key={project.id}
                    title={`📋 ${project.name}`}
                    onClose={() => handleCloseProject(project.id)}
                    defaultPosition={{
                        x: 200 + (openProjects.indexOf(project) * 35),
                        y: 120 + (openProjects.indexOf(project) * 35),
                        width: 700,
                        height: 600
                    }}
                >
                    <DetailWindow>
                        <DetailHeader>
                            <DetailIcon>
                                {iconMap[project.icon] || <span style={{fontSize: '56px'}}>❓</span>}
                            </DetailIcon>
                            <DetailInfo>
                                <DetailTitle>{project.name}</DetailTitle>
                            </DetailInfo>
                        </DetailHeader>

                        <DetailContent>
                            <DetailDescription>
                                {project.long_description}
                            </DetailDescription>
                        </DetailContent>

                        <DetailFooter>
                            <div style={{fontSize: '11px', color: '#666'}}>
                                Project Details • {project.name}
                            </div>
                            <ActionGroup>
                                {project.github && (
                                    <Button
                                        onClick={() => window.open(project.github, '_blank')}
                                    >
                                        🔗 View GitHub
                                    </Button>
                                )}
                                <Button onClick={() => handleCloseProject(project.id)}>
                                    ✖️ Close
                                </Button>
                            </ActionGroup>
                        </DetailFooter>
                    </DetailWindow>
                </WindowsComponent>
            ))}
        </>
    );
}