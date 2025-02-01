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
        {year: '2023-2024', title: '📌 Alternance', desc: 'Alternance en développement web (React, Svelte, Go, etc.)'},
        {year: '2023', title: '🛠 Stage', desc: 'Stage en développement web, premier projet pro'},
        {
            year: '2022',
            title: '📝 Trésorier d\'association',
            desc: 'Gestion des budgets et finances d\'une asso étudiante'
        },
        {
            year: '2021',
            title: '👔 Co-Président d\'association',
            desc: 'Organisation d\'événements et gestion de l\'équipe'
        },
        {year: '2020', title: '📎 Secrétaire d\'association', desc: 'Prise de notes, gestion administrative'},
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
                    <div style={{height: 100, width: 300}}>
                        <h3>{selectedExp.title}</h3>
                        <p>{selectedExp.desc}</p>
                        <Button onClick={() => setSelectedExp(null)}>Close</Button>
                    </div>
                )}
            </TabBody>
        </WindowsComponent>
    );
}
