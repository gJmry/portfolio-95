import React from 'react';
import styled from 'styled-components';
import { Footer } from './Footer.jsx';
import { WindowsAbout } from "./Windows/WindowsAbout.jsx";
import { Desktop } from "./Desktop.jsx";
import { WindowProvider } from '../assets/scripts/WindowContext.jsx';
import {WindowsRecycleBin} from "./Windows/WindowsRecycleBin.jsx";
import {WindowsProjects} from "./Windows/WindowsProjects.jsx";
import {WindowsEducation} from "./Windows/WindowsEducation.jsx";
import {WindowsSport} from "./Windows/WindowsSport.jsx";
import {WindowsMusic} from "./Windows/WindowsMusic.jsx";
import {WindowsSkills} from "./Windows/WindowsSkills.jsx";
import {WindowsExperiences} from "./Windows/WindowsExperiences.jsx";

const PortfolioContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-size: cover;
    background-image: url("https://cdn.wallpaperhub.app/cloudcache/9/8/1/e/8/e/981e8e91f90c93bf5e715527e1922724645f1214.jpg");
    color: white;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
`;

const PortfolioScreen = () => {
        return (
        <WindowProvider>
            <PortfolioContainer>
                <Content>
                    <Desktop />
                    <WindowsAbout />
                    <WindowsRecycleBin />
                    <WindowsProjects />
                    <WindowsEducation />
                    <WindowsSport />
                    <WindowsMusic />
                    <WindowsSkills />
                    <WindowsExperiences />
                </Content>
                <Footer />
            </PortfolioContainer>
        </WindowProvider>
    );
};

export default PortfolioScreen;
