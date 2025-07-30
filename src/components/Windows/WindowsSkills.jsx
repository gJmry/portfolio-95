import React, {useState} from 'react';
import {Button, Tab, TabBody, Tabs, Panel, Divider} from 'react95';
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

const DescriptionPanel = styled(Panel)`
    margin-top: 15px;
    padding: 15px;
    border: 2px inset #c0c0c0;  
`;

const SkillTitle = styled.h4`
    margin: 0 0 8px 0;
    font-weight: bold;
`;

const SkillDescription = styled.p`
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
`;

const CategoryTitle = styled.h3`
    margin-bottom: 15px;
    border-bottom: 1px solid #808080;
    padding-bottom: 5px;
`;

const ContextBadge = styled.span`
    padding: 2px 6px;
    font-size: 9px;
    border-radius: 2px;
    margin-top: 4px;   
    background-color: ${({ children }) =>
        children === 'PERSONAL' ? '#2e7d32' : '#1e3a8a'};
    border: 1px solid #808080;
`;

export function WindowsSkills() {
    const {windows, toggleWindow} = useWindowContext();
    if (!windows.Skills) return null;
    const [activeTab, setActiveTab] = useState(0);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const skills = {
        frontend: [
            {
                name: "⚛️ React.js",
                context: "personal",
                description: "Advanced React mastery with hooks, context API, and optimizations. Development of complex SPA applications with sophisticated state management.",
                projects: "Interactive portfolio, analytics dashboards, e-commerce apps"
            },
            {
                name: "🔥 Svelte",
                context: "personal",
                description: "Modern framework with optimized compilation. Great for lightweight and performant applications with intuitive syntax.",
                projects: "Real-time applications, reusable components"
            },
            {
                name: "🟩 Vue.js",
                context: "university",
                description: "Academic learning framework. Understanding of reactivity and component system. Collaborative study projects.",
                projects: "Student projects, educational prototypes"
            },
            {
                name: "🎨 Tailwind CSS",
                context: "personal",
                description: "Mastery of utility-first CSS. Creating responsive and consistent designs. Build optimization and advanced customization.",
                projects: "Showcase websites, admin interfaces"
            },
            {
                name: "🅰️ Angular",
                context: "university",
                description: "Academic training on TypeScript and MVC architecture. Understanding of services, modules and dependency injection.",
                projects: "Simulated enterprise applications, group projects"
            }
        ],
        backend: [
            {
                name: "🌿 Node.js",
                context: "personal",
                description: "REST and GraphQL APIs development. Express mastery, middleware management, JWT authentication, and database integration.",
                projects: "E-commerce APIs, authentication systems, microservices"
            },
            {
                name: "🕸 Symfony",
                context: "university",
                description: "Learning MVC concepts in PHP. Using Doctrine ORM, routing system, and bundle architecture for academic projects.",
                projects: "University web applications, student management"
            },
            {
                name: "🦀 Rust",
                context: "personal",
                description: "Passion for systems programming. Learning memory management without garbage collector, secure concurrent programming.",
                projects: "CLI tools, parsers, performance experiments"
            },
            {
                name: "☕ Spring Boot",
                context: "university",
                description: "Training on Java enterprise architecture. Understanding annotations, IoC container, and robust application development.",
                projects: "Management systems, academic REST APIs"
            },
            {
                name: "🐹 Go",
                context: "personal",
                description: "Exploring microservices and concurrent programming. Appreciation of syntactic simplicity and native performance.",
                projects: "Fast web services, personal DevOps tools"
            }
        ],
        devops: [
            {
                name: "🔄 CI/CD",
                context: "personal",
                description: "Setting up automated pipelines with GitHub Actions and GitLab CI. Automated testing, progressive deployments, monitoring.",
                projects: "Deployment automation, E2E testing"
            },
            {
                name: "🐳 Docker",
                context: "personal",
                description: "Application containerization. Creating optimized Dockerfiles, docker-compose for multi-service development environments.",
                projects: "Development environments, isolated deployments"
            },
            {
                name: "📦 Kubernetes",
                context: "university",
                description: "Introduction to container orchestration. Understanding pods, services, and deployments in an educational context.",
                projects: "Learning clusters, student projects"
            },
            {
                name: "♻️ Refactoring",
                context: "personal",
                description: "Passion for continuous code improvement. Applying SOLID principles, design patterns, and performance optimizations.",
                projects: "Legacy codebase modernization, optimizations"
            },
            {
                name: "🧠 System Design",
                context: "personal",
                description: "Architectural thinking on scalability. Designing distributed systems, microservices patterns, load management.",
                projects: "Complex application architecture, technical documentation"
            }
        ],
        softskills: [
            {
                name: "🤝 Teamwork",
                context: "personal",
                description: "Effective collaboration in multidisciplinary teams. Using collaborative tools, asynchronous communication, and constructive conflict management.",
                projects: "Open-source projects, international teams"
            },
            {
                name: "🎨 Creativity & UI",
                context: "personal",
                description: "Design and UX sensitivity. Creating intuitive interfaces, respecting accessibility guidelines, and rapid prototyping.",
                projects: "Design systems, innovative user interfaces"
            },
            {
                name: "🎯 Problem-Solving",
                context: "personal",
                description: "Methodical approach to technical challenges. Breaking down complex problems, finding elegant and maintainable solutions.",
                projects: "Complex debugging, algorithm optimizations"
            },
            {
                name: "🚀 Adaptability",
                context: "university",
                description: "Rapid learning ability for new technologies. Adapting to team methodologies and evolving project requirements.",
                projects: "Projects with changing constraints, new stacks"
            },
            {
                name: "🔍 Attention to Detail",
                context: "personal",
                description: "Rigor in code and specifications. Exhaustive testing, precise documentation, and quality standards compliance.",
                projects: "Code reviews, technical documentation"
            },
            {
                name: "🗣️ Communication",
                context: "university",
                description: "Clear communication of technical concepts. Simplifying for non-technical audiences, project documentation, and structured presentations.",
                projects: "Academic presentations, collaborative documentation"
            },
            {
                name: "📢 Public Speaking",
                context: "personal",
                description: "Confidence in public presentation. Sharing technical knowledge, running workshops, and participating in tech events.",
                projects: "Student conferences, technical workshops"
            }
        ]
    };

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    function SkillTabContent({ title, skills, selectedSkill, onSkillClick }) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <CategoryTitle>{title}</CategoryTitle>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {skills.map((skill, index) => (
                            <SkillButton
                                key={index}
                                onClick={() => onSkillClick(skill)}
                                $active={selectedSkill?.name === skill.name}
                            >
                                <div>{skill.name}</div>
                                <ContextBadge>
                                    {skill.context === 'personal' ? 'PERSONAL' : 'UNIVERSITY'}
                                </ContextBadge>
                            </SkillButton>
                        ))}
                    </div>
                </div>

                <DescriptionPanel style={{ marginTop: '10px' }}>
                    {selectedSkill ? (
                        <>
                            <SkillTitle>{selectedSkill.name}</SkillTitle>
                            <Divider />
                            <SkillDescription>
                                <strong>Description:</strong> {selectedSkill.description}
                            </SkillDescription>
                            <br />
                            <SkillDescription>
                                <strong>Projects:</strong> {selectedSkill.projects}
                            </SkillDescription>
                        </>
                    ) : (
                        <>
                            <SkillTitle>👆 Click on a skill to see details</SkillTitle>
                            <Divider />
                            <SkillDescription>
                                <strong>PERSONAL:</strong> Skills acquired through personal passion, individual projects or
                                professional experience.
                            </SkillDescription>
                            <br />
                            <SkillDescription>
                                <strong>UNIVERSITY:</strong> Skills developed through university coursework, academic
                                projects or supervised training.
                            </SkillDescription>
                        </>
                    )}
                </DescriptionPanel>
            </div>
        );
    }


    return (
        <WindowsComponent
            title="💻 Skills"
            onClose={() => toggleWindow('Skills')}
            defaultPosition={{x: 100, y: 100, width: 750, height: 600}}
        >
            <Tabs value={activeTab} onChange={setActiveTab}>
                <Tab value={0}>Frontend</Tab>
                <Tab value={1}>Backend</Tab>
                <Tab value={2}>DevOps</Tab>
                <Tab value={3}>Soft Skills</Tab>
            </Tabs>

            <TabBody style={{ height: '100%', padding: '15px', display: 'flex', flexDirection: 'column' }}>
                {activeTab === 0 && (
                    <SkillTabContent
                        title="🎨 Frontend Technologies"
                        skills={skills.frontend}
                        selectedSkill={selectedSkill}
                        onSkillClick={handleSkillClick}
                    />
                )}
                {activeTab === 1 && (
                    <SkillTabContent
                        title="🛠 Backend Technologies"
                        skills={skills.backend}
                        selectedSkill={selectedSkill}
                        onSkillClick={handleSkillClick}
                    />
                )}
                {activeTab === 2 && (
                    <SkillTabContent
                        title="🚀 DevOps & System Design"
                        skills={skills.devops}
                        selectedSkill={selectedSkill}
                        onSkillClick={handleSkillClick}
                    />
                )}
                {activeTab === 3 && (
                    <SkillTabContent
                        title="💡 Soft Skills"
                        skills={skills.softskills}
                        selectedSkill={selectedSkill}
                        onSkillClick={handleSkillClick}
                    />
                )}
            </TabBody>

        </WindowsComponent>
    );
}