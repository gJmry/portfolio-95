import React from 'react';
import { Button } from 'react95';
import styled from 'styled-components';
import { SectionTitle } from '../shared/WindowStyles.jsx';

const SkillButton = styled(Button)`
    margin: 5px;
    width: 180px;
    height: 60px;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: translateY(-1px);
    }
`;

const SkillGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const TabContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    padding-right: 5px;
`;

export const SkillsTabContent = ({ title, skills }) => (
    <TabContentWrapper>
        <SectionTitle>{title}</SectionTitle>
        <SkillGrid>
            {skills.map((skill) => (
                <SkillButton key={skill}>{skill}</SkillButton>
            ))}
        </SkillGrid>
    </TabContentWrapper>
);

