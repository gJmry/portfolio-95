import React, { useState } from 'react';
import { WindowsComponent } from './WindowsComponent.jsx';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { Button, Separator } from 'react95';
import styled from 'styled-components';
import { experiencesData, getTypeColor } from '../../assets/data/experiencesData.js';
import { TwoColumnLayout, LeftColumn, RightColumn, PlaceholderMessage } from '../shared/WindowStyles.jsx';

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
    margin-bottom: 4px;
`;

const ExperienceTitle = styled.div`
    font-size: 13px;
    line-height: 1.2;
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
    font-size: 18px;
    line-height: 1.5;
    overflow-y: auto;
`;

export function WindowsExperiences() {
    const { windows, toggleWindow } = useWindowContext();
    const [selectedExp, setSelectedExp] = useState(null);

    if (!windows.Experiences) return null;

    return (
        <WindowsComponent
            title="University Experiences"
            onClose={() => toggleWindow('Experiences')}
            defaultPosition={{ x: 150, y: 100, width: 700, height: 500 }}
            windowName="Experiences"
        >
            <TwoColumnLayout $height="400px">
                <LeftColumn>
                    <Separator />
                    {experiencesData.map((exp) => (
                        <TimelineItem key={exp.title}>
                            <ExperienceButton
                                onClick={() => setSelectedExp(exp)}
                                variant={selectedExp === exp ? 'flat' : 'raised'}
                            >
                                <YearBadge style={{ backgroundColor: getTypeColor(exp.type) }}>
                                    {exp.year}
                                </YearBadge>
                                <ExperienceTitle>{exp.title}</ExperienceTitle>
                            </ExperienceButton>
                        </TimelineItem>
                    ))}
                </LeftColumn>
                <RightColumn>
                    {selectedExp ? (
                        <>
                            <DetailTitle>{selectedExp.title}</DetailTitle>
                            <DetailDescription>{selectedExp.description}</DetailDescription>
                        </>
                    ) : (
                        <PlaceholderMessage>
                            Select an experience from the timeline
                            <br />
                            to view detailed information
                        </PlaceholderMessage>
                    )}
                </RightColumn>
            </TwoColumnLayout>
        </WindowsComponent>
    );
}