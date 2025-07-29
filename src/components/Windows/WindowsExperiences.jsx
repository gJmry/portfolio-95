import React, {useState} from 'react';
import {WindowsComponent} from './WindowsComponent';
import {useWindowContext} from '../../assets/scripts/WindowContext.jsx';
import {Tab, TabBody, Tabs, List, ListItem, Panel, Button, Separator} from 'react95';
import styled from 'styled-components';

const ExperiencesContainer = styled.div`
    display: flex;
    height: 400px;
    width: 100%;
`;

const TimelinePanel = styled.div`
    flex: 1;
    border-right: 2px inset;
    padding: 10px;
    overflow-y: auto;
`;

const DetailPanel = styled.div`
    flex: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
`;

const TimelineItem = styled.div`
    margin-bottom: 8px;
    width: 100%;
`;

const ExperienceButton = styled(Button)`
    width: 100%;
    min-height: 60px;
    text-align: left;
    padding: 8px 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const YearBadge = styled.span`
    font-weight: bold;
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 2px;
    margin-bottom: 4px;
`;

const ExperienceTitle = styled.div`
    font-size: 13px;
    font-weight: normal;
    line-height: 1.2;
`;

const DetailContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const DetailTitle = styled.h3`
    margin: 0 0 10px 0;
    padding: 8px;
    font-size: 14px;
    border: 2px outset;
    color: white;
`;

const DetailDescription = styled.div`
    flex: 1;
    padding: 15px;
    font-weight: 600;
    background: bisque;  
    font-size: 14px;
    line-height: 1.5;
    overflow-y: auto;
    color: #000000;
    text-shadow: none;
`;
const PlaceholderText = styled.div`
    text-align: center;
    font-style: italic;
    font-size: 13px;
`;

const ActionBar = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;

export function WindowsExperiences() {
    const {windows, toggleWindow} = useWindowContext();
    if (!windows.Experiences) return null;

    const [selectedExp, setSelectedExp] = useState(null);

    const experiences = [
        {
            year: '2025',
            title: '💰 Association Treasurer (Student Club)',
            desc: 'Currently overseeing the financial management of the student association, including budgeting and expense tracking, ensuring transparency and responsible spending. Managing annual budgets and coordinating with various departments for financial planning.',
            type: 'current'
        },
        {
            year: '2024-2026',
            title: '🔗 Elected IUT UFR Representative',
            desc: 'Serving as an elected representative for the IUT UFR, advocating for student interests and fostering communication between students and faculty. Participating in academic council meetings and representing student concerns in institutional decisions.',
            type: 'ongoing'
        },
        {
            year: '2024',
            title: '🌟 Co-President of Student Club',
            desc: 'Led a team in organizing various student events, promoting engagement, and fostering community spirit within the university. Developed leadership and organizational skills while managing a team of 12 volunteers    and coordinating events for 200+ students.',
            type: 'leadership'
        },
        {
            year: '2022-2025',
            title: '🎓 BUT Computer Science Lyon 1',
            desc: 'Pursuing a Bachelor in Technology focused on Computer Science, with comprehensive coursework covering software development, algorithms, data structures, network systems, and project management. Maintaining strong academic performance while actively participating in extracurricular activities.',
            type: 'education'
        },
        {
            year: '2022-2023',
            title: '🤝 Association Secretary (BDE Info)',
            desc: 'Responsible for keeping detailed minutes of meetings, overseeing administrative tasks, and facilitating communication within the student body. Managed documentation systems and coordinated between different association committees.',
            type: 'administrative'
        },
    ];

    const getTypeColor = (type) => {
        const colors = {
            current: '#2ecc71',
            ongoing: '#3498db',
            leadership: '#e74c3c',
            education: '#9b59b6',
            administrative: '#f39c12'
        };
        return colors[type] || '#95a5a6';
    };

    return (
        <WindowsComponent
            title="📜 University Experiences"
            onClose={() => toggleWindow('Experiences')}
            defaultPosition={{ x: 150, y: 100, width: 700, height: 500 }}
        >
            <ExperiencesContainer>
                <TimelinePanel>
                    <Separator />
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index}>
                            <ExperienceButton
                                onClick={() => setSelectedExp(exp)}
                                variant={selectedExp === exp ? "flat" : "raised"}
                            >
                                <YearBadge style={{backgroundColor: getTypeColor(exp.type)}}>
                                    {exp.year}
                                </YearBadge>
                                <ExperienceTitle>{exp.title}</ExperienceTitle>
                            </ExperienceButton>
                        </TimelineItem>
                    ))}
                </TimelinePanel>

                <DetailPanel>
                    <DetailContent hasContent={!!selectedExp}>
                        {selectedExp ? (
                            <>
                                <DetailTitle>
                                    {selectedExp.title}
                                </DetailTitle>
                                <DetailDescription>
                                    {selectedExp.desc}
                                </DetailDescription>
                            </>
                        ) : (
                            <PlaceholderText>
                                Select an experience from the timeline<br/>
                                to view detailed information
                            </PlaceholderText>
                        )}
                    </DetailContent>
                </DetailPanel>
            </ExperiencesContainer>
        </WindowsComponent>
    );
}