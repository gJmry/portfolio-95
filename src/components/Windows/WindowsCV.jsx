import React from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';
import cv from "../../assets/images/cv.png"
import styled from "styled-components";

const CVImage = styled.img`
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
`;

export function WindowsCV() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.CV) return null;

    return (
        <WindowsComponent
            title="Jérémy Girard - CV"
            onClose={() => toggleWindow('CV')}
            footerContent={
                <a href={cv} target="_blank" rel="noopener noreferrer">
                    Télécharger le CV
                </a>
            }
        >
            <CVImage
                src={cv}
                alt="Aperçu du CV de Jérémy Girard"
            />
        </WindowsComponent>
    );
}
