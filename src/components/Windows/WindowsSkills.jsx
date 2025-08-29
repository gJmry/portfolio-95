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
    flex: none;
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
    background-color: ${({children}) =>
            children === 'PERSONAL' ? '#2e7d32' :
                    children === 'UNIVERSITY' ? '#1e3a8a' : '#8b5a00'};
    border: 1px solid #808080;
    color: white;
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
        ],
        "but": [
            {
                "name": "Skill 1: Develop an application",
                "context": "BUT",
                "description": "Design and implement applications while following specifications, ensuring accessibility, quality, and production integration.",
                "levels": {
                    "Level 1": [
                        "Implement simple designs",
                        "Create simple designs",
                        "Conduct tests and evaluate their results against specifications",
                        "Develop user interfaces"
                    ],
                    "Level 2": [
                        "Design and implement functional and non-functional specifications based on requirements",
                        "Apply accessibility and usability principles",
                        "Adopt good design and programming practices",
                        "Use design patterns to develop consistent applications",
                        "Adapt existing solutions to the application context",
                        "Verify and validate application quality through testing"
                    ],
                    "Level 3": [
                        "Select and implement appropriate architectures",
                        "Develop applications on specific platforms",
                        "Conduct an application audit",
                        "Integrate solutions into a production environment"
                    ]
                }
            },
            {
                "name": "Skill 2: Optimize computer applications",
                "context": "BUT",
                "description": "Analyze, compare, and improve the performance of computer applications by selecting appropriate data structures and algorithms, while considering social and environmental issues.",
                "levels": {
                    "Level 1": [
                        "Analyze a problem methodically (break it down into simple algorithmic elements, data structures, etc.)",
                        "Compare algorithms for common problems (basic sorting, searching, etc.)",
                        "Experiment with compilation concepts and low-level data representations",
                        "Formalize and apply mathematical tools for computer science"
                    ],
                    "Level 2": [
                        "Select complex data structures appropriate to the problem",
                        "Apply suitable algorithmic techniques for complex problems (e.g., operations research, tree methods, global optimization, artificial intelligence, etc.)",
                        "Understand the differences between programming paradigms",
                        "Understand the issues and methods for securing data and code",
                        "Evaluate the environmental and social impact of proposed solutions"
                    ],
                    "Level 3": [
                        "Anticipate results of various metrics (execution time, memory usage, etc.)",
                        "Profile and analyze the behavior of existing code",
                        "Apply scientific computing methods (imaging, simulation, AI, video games, parallelism, symbolic computation, etc.)",
                        "Identify technical solutions to manage application scalability"
                    ]
                }
            },
            {
                "name": "Skill 3: Administer complex computer systems and networks",
                "context": "BUT",
                "description": "Install, configure, secure, and manage systems and networks to ensure proper operation in complex environments.",
                "levels": {
                    "Level 1": [
                        "Identify the different components (hardware and software) of a digital system",
                        "Use the basic features of a multitasking / multi-user system",
                        "Install and configure an operating system and development tools",
                        "Set up a workstation within a corporate network"
                    ],
                    "Level 2": [
                        "Design and develop networked applications",
                        "Use servers and virtualized network services",
                        "Secure a system’s services and data",
                        "Write technical documentation (in French and English)"
                    ]
                }
            },
            {
                "name": "Skill 4: Manage information data",
                "context": "BUT",
                "description": "Design, query, secure, and use databases to transform information into a valuable resource for the organization.",
                "levels": {
                    "Level 1": [
                        "Update and query a relational database (direct queries or through an application)",
                        "Visualize data",
                        "Design a relational database from a set of requirements"
                    ],
                    "Level 2": [
                        "Optimize the company’s data models",
                        "Ensure data confidentiality (integrity and security)",
                        "Organize data output through programming and visualization",
                        "Handle heterogeneous data"
                    ]
                }
            },
            {
                "name": "Skill 5: Manage a project",
                "context": "BUT",
                "description": "Plan, organize, and lead an IT project by considering user needs, organizational constraints, and feasibility criteria.",
                "levels": {
                    "Level 1": [
                        "Understand client and user needs",
                        "Set up project management tools",
                        "Identify stakeholders and the different phases of a development cycle"
                    ],
                    "Level 2": [
                        "Identify processes within an organization to improve information systems",
                        "Formalize client and user needs",
                        "Identify feasibility criteria of an IT project",
                        "Define and implement a project monitoring process"
                    ]
                }
            },
            {
                "name": "Skill 6: Work in an IT team",
                "context": "BUT",
                "description": "Collaborate effectively within an IT team by leveraging interpersonal skills, understanding organizational challenges, and contributing to change management.",
                "levels": {
                    "Level 1": [
                        "Understand the digital ecosystem",
                        "Discover the required skills for different IT sectors",
                        "Identify the statuses, functions, and roles of each member of a multidisciplinary team",
                        "Develop interpersonal skills to work in a team"
                    ],
                    "Level 2": [
                        "Understand the diversity, structure, and scope of IT in an organization (IT services companies, IT departments, etc.)",
                        "Apply a process to integrate into an IT team within an organization",
                        "Leverage interpersonal skills to work in an IT team",
                        "Report on professional activities"
                    ],
                    "Level 3": [
                        "Organize and share technological and informational monitoring",
                        "Identify innovation economy issues",
                        "Guide IT change management within an organization"
                    ]
                }
            }
        ]
    };

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    function SkillTabContent({title, skills, selectedSkill, onSkillClick}) {
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
                        {skills.map((skill, index) => (
                            <SkillButton
                                key={index}
                                onClick={() => onSkillClick(skill)}
                                $active={selectedSkill?.name === skill.name}
                            >
                                <div>{skill.name}</div>
                                <ContextBadge>
                                    {skill.context === 'personal' ? 'PERSONAL' :
                                        skill.context === 'university' ? 'UNIVERSITY' : 'BUT'}
                                </ContextBadge>
                            </SkillButton>
                        ))}
                    </div>

                    {selectedSkill && (
                        <DescriptionPanel style={{marginTop: '15px', maxHeight: '300px',}}>
                            <SkillTitle>{selectedSkill.name}</SkillTitle>
                            <Divider/>
                            <SkillDescription>
                                <strong>Description:</strong> {selectedSkill.description}
                            </SkillDescription>
                            <br/>
                            <SkillDescription>
                                <strong>Projects:</strong> {selectedSkill.projects}
                            </SkillDescription>

                            {selectedSkill.levels && (
                                <div style={{marginTop: '15px'}}>
                                    <Divider/>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '12px',
                                    }}>
                                        {Object.entries(selectedSkill.levels).map(([level, tasks]) => (
                                            <div
                                                key={level}
                                                style={{
                                                    border: '1px solid #c0c0c0',
                                                    padding: '12px',
                                                    borderRadius: '2px',
                                                }}
                                            >
                                                <div style={{
                                                    fontWeight: 'bold',
                                                    marginBottom: '8px',
                                                    fontSize: '14px',
                                                }}>
                                                    {level}
                                                </div>
                                                <ul style={{
                                                    margin: '0',
                                                    paddingLeft: '18px',
                                                    fontSize: '13px',
                                                    lineHeight: '1.4'
                                                }}>
                                                    {tasks.map((task, i) => (
                                                        <li key={i} style={{marginBottom: '4px'}}>
                                                            {task}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </DescriptionPanel>
                    )}

                    {!selectedSkill && (
                        <DescriptionPanel style={{marginTop: '15px'}}>
                            <SkillTitle>👆 Click on a skill to see the details</SkillTitle>
                            <Divider/>
                            <SkillDescription>
                                <strong>PERSONAL:</strong> Skills acquired through personal passion, individual projects, or professional experience.
                            </SkillDescription>
                            <br/>
                            <SkillDescription>
                                <strong>UNIVERSITY:</strong> Skills developed through university courses, academic projects, or supervised training.
                            </SkillDescription>
                            <br/>
                            <SkillDescription>
                                <strong>BUT:</strong> Skills from the Computer Science BUT curriculum with defined progression levels.
                            </SkillDescription>
                        </DescriptionPanel>
                    )}
                </div>
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
                <Tab value={4}>Computer Science BUT</Tab>
            </Tabs>

            <TabBody style={{height: '100%', padding: '15px'}}>
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
                {activeTab === 4 && (
                    <SkillTabContent
                        title="🎓 BUT Informatique"
                        skills={skills.but}
                        selectedSkill={selectedSkill}
                        onSkillClick={handleSkillClick}
                    />
                )}
            </TabBody>

        </WindowsComponent>
    );
}