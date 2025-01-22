import React from 'react';
import styled from 'styled-components';
import { Footer } from './Footer.jsx';
import { WindowsCV } from "./Windows/WindowsCV.jsx";
import { Desktop } from "./Desktop.jsx";
import { WindowProvider } from '../assets/scripts/WindowContext.jsx';
import {WindowsRecycleBin} from "./Windows/WindowsRecycleBin.jsx";
import {WindowsProjects} from "./Windows/WindowsProjects.jsx";

const PortfolioContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
                    <WindowsCV />
                    <WindowsRecycleBin />
                    <WindowsProjects />
                </Content>
                <Footer />
            </PortfolioContainer>
        </WindowProvider>
    );
};

export default PortfolioScreen;
