import React, { useState } from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';
import { Button, Panel, Separator } from 'react95';
import styled from 'styled-components';
import { educationTimeline, getSkillIcon } from '../../assets/data/educationData.js';
import { computeProgress } from '../../utils/dateUtils.js';
import { SkillChip, ChipsRow, ProgressTrack, ProgressFill, ProgressLabel, WindowContainer } from '../shared/WindowStyles.jsx';

const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
    flex: 1;
    padding-right: 10px;
`;

const EducationCard = styled.div`
    position: relative;
    cursor: pointer;
    padding: 12px;
    border: 2px outset #c0c0c0;
    margin-top: 10px;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const CardTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: bold;
`;

const ExpandButton = styled(Button)`
    font-size: 12px;
    min-width: 80px;
`;

const DetailPanel = styled(Panel)`
    margin-top: 10px;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
`;

const ProgressSection = styled.div`
    margin-bottom: 15px;
`;

const findOverallDateRange = (timeline) => {
    const start = timeline.reduce((earliest, entry) => {
        const date = new Date(`${entry.startYear}-09-01`);
        return date < earliest ? date : earliest;
    }, new Date());

    const end = timeline.reduce((latest, entry) => {
        const date = new Date(`${entry.endYear}-09-01`);
        return date > latest ? date : latest;
    }, new Date(0));

    return { start, end };
};

const toggleSetEntry = (set, id) => {
    const next = new Set(set);
    if (next.has(id)) {
        next.delete(id);
    } else {
        next.add(id);
    }
    return next;
};

export function WindowsEducation() {
    const { windows, toggleWindow } = useWindowContext();
    const [expandedCards, setExpandedCards] = useState(new Set());

    if (!windows.Education) return null;

    const { start, end } = findOverallDateRange(educationTimeline);
    const totalProgress = computeProgress(start.getFullYear(), end.getFullYear());

    const handleToggleCard = (id) => setExpandedCards((prev) => toggleSetEntry(prev, id));

    return (
        <WindowsComponent
            title="Educational Journey"
            onClose={() => toggleWindow('Education')}
            defaultPosition={{ x: 100, y: 100, width: 750, height: 600 }}
            windowName="Education"
        >
            <WindowContainer $height="500px" $padding="15px">
                <ProgressSection>
                    <h4 style={{ margin: '0 0 10px 0', textAlign: 'center' }}>
                        Academic Progress Timeline
                    </h4>
                    <ProgressTrack>
                        <ProgressFill $percentage={totalProgress} />
                    </ProgressTrack>
                    <ProgressLabel>Bachelor's Degree Progress: {totalProgress}%</ProgressLabel>
                </ProgressSection>

                <Separator style={{ margin: '15px 0' }} />

                <TimelineContainer>
                    {educationTimeline.map((entry) => {
                        const entryProgress = computeProgress(entry.startYear, entry.endYear);
                        const isExpanded = expandedCards.has(entry.id);

                        return (
                            <EducationCard key={entry.id} onClick={() => handleToggleCard(entry.id)}>
                                <CardHeader>
                                    <CardTitle>{entry.year}</CardTitle>
                                    <ExpandButton
                                        size="sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleToggleCard(entry.id);
                                        }}
                                    >
                                        {isExpanded ? 'Less' : 'More'}
                                    </ExpandButton>
                                </CardHeader>

                                <div style={{ fontSize: '13px', marginBottom: '8px' }}>
                                    {entry.description}
                                </div>

                                <ChipsRow>
                                    {entry.skills.map((skill) => (
                                        <SkillChip key={skill}>
                                            {getSkillIcon(skill)} {skill}
                                        </SkillChip>
                                    ))}
                                </ChipsRow>

                                {isExpanded && (
                                    <DetailPanel variant="well">
                                        <h4 style={{ margin: '0 0 10px 0' }}>Detailed Curriculum</h4>
                                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                            {entry.details.map((detail) => (
                                                <li key={detail} style={{ marginBottom: '5px', fontSize: '12px' }}>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                        <div style={{ marginTop: '15px', textAlign: 'center' }}>
                                            <div style={{ fontSize: '11px', fontWeight: 'bold' }}>
                                                Completion Rate
                                            </div>
                                            <ProgressTrack $height="12px" style={{ marginTop: '5px' }}>
                                                <ProgressFill $percentage={entryProgress} />
                                            </ProgressTrack>
                                            <div style={{ fontSize: '10px', marginTop: '2px' }}>
                                                {entryProgress}% Complete
                                            </div>
                                        </div>
                                    </DetailPanel>
                                )}
                            </EducationCard>
                        );
                    })}
                </TimelineContainer>
            </WindowContainer>
        </WindowsComponent>
    );
}