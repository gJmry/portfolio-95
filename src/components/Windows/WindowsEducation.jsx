import React, {useState} from 'react';
import {useWindowContext} from '../../assets/scripts/WindowContext.jsx';
import {WindowsComponent} from './WindowsComponent.jsx';
import {ScrollView, GroupBox, Button, Panel, Separator} from "react95";
import styled from 'styled-components';

const EducationContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
    flex: 1;
    padding-right: 10px;
`;

const EducationCard = styled(GroupBox)`
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease;
    padding-bottom: 10px;
    margin-top: 15px;
`;


const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const YearTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const ExpandButton = styled(Button)`
    font-size: 12px;
    min-width: 80px;
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
`;

const SkillChip = styled.div`
    border: 1px outset #c0c0c0;
    padding: 4px 8px;
    font-size: 11px;
    font-weight: bold;
    border-radius: 0;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const DetailPanel = styled(Panel)`
    margin-top: 10px;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
`;

const ProgressContainer = styled.div`
    margin-bottom: 15px;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 20px;
    background: white;
    border: 2px inset #c0c0c0;
    position: relative;
    overflow: hidden;
`;

const ProgressFill = styled.div`
    height: 100%;
    background: linear-gradient(90deg, #0080ff 0%, #0060ff 100%);
    width: ${props => props.percentage}%;
    transition: width 1s ease-in-out;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 2px,
                rgba(255, 255, 255, 0.1) 2px,
                rgba(255, 255, 255, 0.1) 4px
        );
    }
`;

const ProgressLabel = styled.div`
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    margin-top: 5px;
`;
const calculateProgress = (startYear, endYear) => {
    const startDate = new Date(`${startYear}-09-01`);
    const endDate = new Date(`${endYear}-09-01`);
    const today = new Date();

    if (today <= startDate) return 0;
    if (today >= endDate) return 100;

    const totalTime = endDate - startDate;
    const elapsedTime = today - startDate;
    return Math.round((elapsedTime / totalTime) * 100);
};


const educationTimeline = [
    {
        id: 4,
        year: "🏛️ BUT Computer Science - 3rd Year",
        period: "2024-2025",
        startYear: 2024,
        endYear: 2025,
        details: [
            "🅰️ Angular Enterprise Applications",
            "🌱 Spring Boot Microservices",
            "📊 Advanced Project Management",
            "🍃 NoSQL Databases (MongoDB)",
            "🔧 DevOps & CI/CD Practices",
            "📱 Mobile Development Concepts"
        ],
        skills: ["Angular", "Spring Boot", "MongoDB", "Docker", "Jenkins", "Agile"],
        description: "Final year emphasizing enterprise-level development, microservices architecture, and professional practices."
    },
    {
        id: 3,
        year: "🏛️ BUT Computer Science - 2nd Year",
        period: "2023-2024",
        startYear: 2023,
        endYear: 2024,
        details: [
            "⚡ JavaScript & DOM Manipulation",
            "🐘 PHP Server-Side Development",
            "🎵 Symfony Framework Architecture",
            "🟢 Vue.js Frontend Framework",
            "📈 Project Management (Intermediate)",
            "🔍 Advanced Database (PL/SQL)"
        ],
        skills: ["JavaScript", "PHP", "Symfony", "Vue.js", "PL/SQL", "REST APIs"],
        description: "Advanced web development year with focus on full-stack technologies and modern frameworks."
    },
    {
        id: 2,
        year: "🏛️ BUT Computer Science - 1st Year",
        period: "2022-2023",
        startYear: 2022,
        endYear: 2023,
        details: [
            "🔵 C Programming Fundamentals",
            "☕ Java Object-Oriented Programming",
            "🎨 Web Technologies (HTML/CSS)",
            "📊 Business & Accounting Principles",
            "🗄️ Database Design & SQL"
        ],
        skills: ["C", "Java", "HTML/CSS", "SQL", "Git", "Linux"],
        description: "First year focused on programming fundamentals, introducing core computer science concepts and business knowledge."
    },
    {
        id: 1,
        year: "🎓 High School Diploma",
        period: "2019-2022",
        startYear: 2019,
        endYear: 2022,
        details: [
            "🏅 Mention Bien (Good Honors)",
            "💻 Major: Digital & Computer Science (SIN)",
            "📐 Mathematics Specialization",
            "🔬 Physics & Engineering Fundamentals"
        ],
        skills: ["HTML", "CSS", "Python", "Arduino", "Electronics"],
        description: "Graduated with honors in Digital & Computer Science track, building foundational programming and engineering skills."
    }
];


export function WindowsEducation() {
    const {windows, toggleWindow} = useWindowContext();
    const [expandedCards, setExpandedCards] = useState(new Set());

    if (!windows.Education) return null;

    const toggleCard = (id) => {
        const newExpanded = new Set(expandedCards);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedCards(newExpanded);
    };

    const getSkillIcon = (skill) => {
        const icons = {
            'HTML': '🌐', 'CSS': '🎨', 'JavaScript': '⚡', 'Java': '☕',
            'C': '🔵', 'PHP': '🐘', 'Python': '🐍', 'Vue.js': '🟢',
            'Angular': '🅰️', 'Spring Boot': '🌱', 'MongoDB': '🍃',
            'SQL': '🗄️', 'PL/SQL': '🔍', 'Git': '📝', 'Docker': '🐳',
            'Linux': '🐧', 'Symfony': '🎵', 'REST APIs': '🔌',
            'Jenkins': '⚙️', 'Agile': '🔄', 'Arduino': '🔧'
        };
        return icons[skill] || '💻';
    };

    const overallStartDate = educationTimeline.reduce((earliest, entry) => {
        const start = new Date(`${entry.startYear}-09-01`);
        return start < earliest ? start : earliest;
    }, new Date());

    const overallEndDate = educationTimeline.reduce((latest, entry) => {
        const end = new Date(`${entry.endYear}-09-01`);
        return end > latest ? end : latest;
    }, new Date());

    const totalProgress = calculateProgress(
        overallStartDate.getFullYear(),
        overallEndDate.getFullYear()
    );


    return (
        <WindowsComponent
            title="🎓 Educational Journey"
            onClose={() => toggleWindow('Education')}
            defaultPosition={{x: 100, y: 100, width: 750, height: 600}}
        >
            <EducationContainer>
                <ProgressContainer>
                    <h4 style={{margin: '0 0 10px 0', textAlign: 'center'}}>
                        Academic Progress Timeline
                    </h4>
                    <ProgressBar>
                        <ProgressFill percentage={totalProgress}/>
                    </ProgressBar>
                    <ProgressLabel>Bachelor's Degree Progress: {totalProgress}%</ProgressLabel>
                </ProgressContainer>

                <Separator style={{margin: '15px 0'}}/>

                <TimelineContainer>
                    {educationTimeline.map((entry) => {
                            const entryProgress = calculateProgress(entry.startYear, entry.endYear);

                            return (
                                <EducationCard
                                    key={entry.id}
                                    label={`${entry.year} • ${entry.period}`}
                                    onClick={() => toggleCard(entry.id)}
                                >
                                    <CardHeader>
                                        <YearTitle>
                                            {entry.year}
                                        </YearTitle>
                                        <ExpandButton
                                            size="sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleCard(entry.id);
                                            }}
                                        >
                                            {expandedCards.has(entry.id) ? '📖 Less' : '📋 More'}
                                        </ExpandButton>
                                    </CardHeader>

                                    <div style={{fontSize: '13px', marginBottom: '8px'}}>
                                        {entry.description}
                                    </div>

                                    <SkillsContainer>
                                        {entry.skills.map((skill, idx) => (
                                            <SkillChip key={idx}>
                                                {getSkillIcon(skill)} {skill}
                                            </SkillChip>
                                        ))}
                                    </SkillsContainer>

                                    {expandedCards.has(entry.id) && (
                                        <DetailPanel variant="well">
                                            <h4 style={{margin: '0 0 10px 0'}}>📚 Detailed Curriculum</h4>
                                            <ul style={{margin: '0', paddingLeft: '20px'}}>
                                                {entry.details.map((detail, idx) => (
                                                    <li key={idx} style={{marginBottom: '5px', fontSize: '12px'}}>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div style={{marginTop: '15px', textAlign: 'center'}}>
                                                <div style={{fontSize: '11px', fontWeight: 'bold'}}>
                                                    Completion Rate
                                                </div>
                                                <ProgressBar style={{height: '12px', marginTop: '5px'}}>
                                                    <ProgressFill percentage={entryProgress}/>
                                                </ProgressBar>
                                                <div style={{fontSize: '10px', marginTop: '2px'}}>
                                                    {entryProgress}% Complete
                                                </div>
                                            </div>
                                        </DetailPanel>
                                    )}
                                </EducationCard>
                            )
                        }
                    )}
                </TimelineContainer>
            </EducationContainer>
        </WindowsComponent>
    );
}