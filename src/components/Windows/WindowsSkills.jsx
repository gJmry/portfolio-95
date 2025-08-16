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
                "name": "Compétence 1 : Réaliser un développement d'application",
                "context": "BUT",
                "description": "Concevoir et implémenter des applications en respectant des spécifications, en garantissant l'accessibilité, la qualité et l'intégration en production.",
                "levels": {
                    "Niveau 1": [
                        "Implémenter des conceptions simples",
                        "Élaborer des conceptions simples",
                        "Faire des essais et évaluer leurs résultats en regard des spécifications",
                        "Développer des interfaces utilisateurs"
                    ],
                    "Niveau 2": [
                        "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
                        "Appliquer des principes d'accessibilité et d'ergonomie",
                        "Adopter de bonnes pratiques de conception et de programmation",
                        "Utiliser des patrons de conception pour le développement d'applications cohérentes",
                        "Adapter les solutions existantes au contexte applicatif",
                        "Vérifier et valider la qualité de l'application par les tests"
                    ],
                    "Niveau 3": [
                        "Choisir et implémenter les architectures adaptées",
                        "Développer des applications sur des supports spécifiques",
                        "Réaliser un audit d'une application",
                        "Intégrer des solutions dans un environnement de production"
                    ]
                },
            },
            {
                "name": "Compétence 2 : Optimiser des applications informatiques",
                "context": "BUT",
                "description": "Analyser, comparer et améliorer les performances d'applications informatiques en choisissant des structures et des algorithmes adaptés, tout en tenant compte des enjeux sociétaux et environnementaux.",
                "levels": {
                    "Niveau 1": [
                        "Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)",
                        "Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)",
                        "Expérimenter la notion de compilation et les représentations bas niveau des données",
                        "Formaliser et mettre en œuvre des outils mathématiques pour l’informatique"
                    ],
                    "Niveau 2": [
                        "Choisir des structures de données complexes adaptées au problème",
                        "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle...)",
                        "Appréhender la différence entre les paradigmes de programmation",
                        "Comprendre les enjeux et moyens de sécurisation des données et du code",
                        "Évaluer l’impact environnemental et sociétal des solutions proposées"
                    ],
                    "Niveau 3": [
                        "Anticiper les résultats de diverses métriques (temps d’exécution, occupation mémoire...)",
                        "Profiler et analyser le comportement d’un code existant",
                        "Appliquer des méthodes de calcul scientifique (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel...)",
                        "Identifier les solutions techniques pour gérer la montée en charge des applications"
                    ]
                },
            },
            {
                "name": "Compétence 3 : Administrer des systèmes informatiques communicants complexes",
                "context": "BUT",
                "description": "Installer, configurer, sécuriser et administrer des systèmes et réseaux afin de garantir leur bon fonctionnement dans des environnements complexes.",
                "levels": {
                    "Niveau 1": [
                        "Identifier les différents composants (matériels et logiciels) d’un système numérique",
                        "Utiliser les fonctionnalités de base d’un système multitâches / multiutilisateurs",
                        "Installer et configurer un système d’exploitation et des outils de développement",
                        "Configurer un poste de travail dans un réseau d’entreprise"
                    ],
                    "Niveau 2": [
                        "Concevoir et développer des applications communicantes",
                        "Utiliser des serveurs et des services réseaux virtualisés",
                        "Sécuriser les services et données d’un système",
                        "Rédiger une documentation technique (en français et en anglais)"
                    ]
                },
            },
            {
                "name": "Compétence 4 : Gérer des données de l’information",
                "context": "BUT",
                "description": "Concevoir, interroger, sécuriser et exploiter des bases de données afin de transformer l’information en ressource utile pour l’entreprise.",
                "levels": {
                    "Niveau 1": [
                        "Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)",
                        "Visualiser des données",
                        "Concevoir une base de données relationnelle à partir d'un cahier des charges"
                    ],
                    "Niveau 2": [
                        "Optimiser les modèles de données de l’entreprise",
                        "Assurer la confidentialité des données (intégrité et sécurité)",
                        "Organiser la restitution de données à travers la programmation et la visualisation",
                        "Manipuler des données hétérogènes"
                    ]
                },
            },
            {
                "name": "Compétence 5 : Conduire un projet",
                "context": "BUT",
                "description": "Planifier, organiser et piloter un projet informatique en tenant compte des besoins des utilisateurs, des contraintes organisationnelles et des critères de faisabilité.",
                "levels": {
                    "Niveau 1": [
                        "Appréhender les besoins du client et de l'utilisateur",
                        "Mettre en place les outils de gestion de projet",
                        "Identifier les acteurs et les différentes phases d'un cycle de développement"
                    ],
                    "Niveau 2": [
                        "Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information",
                        "Formaliser les besoins du client et de l'utilisateur",
                        "Identifier les critères de faisabilité d’un projet informatique",
                        "Définir et mettre en œuvre une démarche de suivi de projet"
                    ]
                },
            },
            {
                "name": "Compétence 6 : Travailler dans une équipe informatique",
                "context": "BUT",
                "description": "Collaborer efficacement au sein d’une équipe informatique en mobilisant des compétences interpersonnelles, en comprenant les enjeux organisationnels et en participant à la conduite du changement.",
                "levels": {
                    "Niveau 1": [
                        "Appréhender l’écosystème numérique",
                        "Découvrir les aptitudes requises selon les différents secteurs informatiques",
                        "Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire",
                        "Acquérir les compétences interpersonnelles pour travailler en équipe"
                    ],
                    "Niveau 2": [
                        "Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation (ESN, DSI, ...)",
                        "Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation",
                        "Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique",
                        "Rendre compte de son activité professionnelle"
                    ],
                    "Niveau 3": [
                        "Organiser et partager une veille technologique et informationnelle",
                        "Identifier les enjeux de l’économie de l’innovation",
                        "Guider la conduite du changement informatique au sein d’une organisation"
                    ]
                },
            }
        ],
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
                            <SkillTitle>👆 Cliquez sur une compétence pour voir les détails</SkillTitle>
                            <Divider/>
                            <SkillDescription>
                                <strong>PERSONAL:</strong> Compétences acquises par passion personnelle, projets
                                individuels ou expérience professionnelle.
                            </SkillDescription>
                            <br/>
                            <SkillDescription>
                                <strong>UNIVERSITY:</strong> Compétences développées à travers les cours universitaires,
                                projets académiques ou formation supervisée.
                            </SkillDescription>
                            <br/>
                            <SkillDescription>
                                <strong>BUT:</strong> Compétences du référentiel BUT Informatique avec niveaux de
                                progression définis.
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
                <Tab value={4}>BUT Informatique</Tab>
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