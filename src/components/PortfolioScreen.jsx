import React, {useState} from 'react';
import styled from 'styled-components';
import { Footer } from './Footer.jsx';
import {WindowsCV} from "./Windows/WindowsCV.jsx";

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
    justify-content: center;
    align-items: cente  r;
`;

const PortfolioScreen = () => {
    const [isCVOpen, setIsCVOpen] = useState(false);

    const handleOpenCV = () => setIsCVOpen(true);
    const handleCloseCV = () => setIsCVOpen(false);

    return (
        <PortfolioContainer>
            <Content>
                <WindowsCV isOpen={isCVOpen} onClose={handleCloseCV} />
            </Content>
            <Footer onOpenCV={handleOpenCV} />
        </PortfolioContainer>
    );
};

export default PortfolioScreen;
