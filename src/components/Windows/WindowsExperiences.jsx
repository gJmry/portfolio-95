import React, {useState} from 'react';
import {WindowsComponent} from './WindowsComponent';
import {useWindowContext} from '../../assets/scripts/WindowContext.jsx';
import {Tab, TabBody, Tabs, List, ListItem, Panel, Button} from 'react95';
import styled from 'styled-components';

const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

const TimelineItem = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;


export function WindowsExperiences() {
    const {windows, toggleWindow} = useWindowContext();
    if (!windows.Experiences) return null;

    const [selectedExp, setSelectedExp] = useState(null);

    const experiences = [
        {year: '2022-2025', title: '📎 BUT Computer Science Lyon 1', desc: ''},
        {year: '2022-2023', title: '📎 Association Secretary (BDE Info)', desc: 'Note-taking, administrative management'},
        {year: '2023', title: '🛠 Full Stack Developer Internship', desc: 'Web development internship, first professional project in Symfony PHP at Onyl Rocks'},
        {year: '2024', title: '👔 Co-President of an Association (Student Club)', desc: 'Event organization and team management'},
        {year: '2023-2024', title: '📌 Full Stack Developer Apprenticeship', desc: 'Web development apprenticeship, using Symfony & Javascript, at Onyl Rocks'},
        {year: '2024-2025', title: '📝 Association Treasurer (Student Club)', desc: 'Managing budgets and finances of a student association'},
    ];

    return (
        <WindowsComponent title="📜 Experiences" onClose={() => toggleWindow('Experiences')}>
            <TabBody style={{height: 300, padding: '10px', overflow: 'auto'}}>
                <TimelineContainer>
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index}>
                            <Button style={{width: 300, height: 75}} onClick={() => setSelectedExp(exp)}>{exp.year} - {exp.title}</Button>
                        </TimelineItem>
                    ))}

                </TimelineContainer>
            </TabBody>
            <TabBody>
                {selectedExp && (
                    <div style={{height: 200, width: 300}}>
                        <h3>{selectedExp.title}</h3>
                        <p>{selectedExp.desc}</p>
                        <Button onClick={() => setSelectedExp(null)}>Close</Button>
                    </div>
                )}
            </TabBody>
        </WindowsComponent>
    );
}
