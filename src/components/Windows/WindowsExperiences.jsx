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
        {year: '2022-2025', title: '🎓 BUT Computer Science Lyon 1', desc: 'Pursuing a Bachelor in Technology focused on Computer Science, with coursework covering software development, algorithms, and network systems.'},
        {year: '2022-2023', title: '🤝 Association Secretary (BDE Info)', desc: 'Responsible for keeping detailed minutes of meetings, overseeing administrative tasks, and facilitating communication within the student body.'},
        {year: '2024', title: '🌟 Co-President of a Student Association', desc: 'Led a team in organizing various student events, promoting engagement, and fostering community spirit within the university, while developing leadership and organizational skills.'},
        {year: '2025', title: '💰 Association Treasurer (Student Club)', desc: 'Oversaw the financial management of the student association, including budgeting and expense tracking, ensuring transparency and responsible spending.'},
        {year: '2024-2026', title: '🔗 Elected IUT UFR Representative', desc: 'Serving as an elected representative for the IUT UFR, advocating for student interests and fostering communication between students and faculty.'},
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
