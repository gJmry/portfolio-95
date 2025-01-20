import React from 'react';
import { WindowsComponent } from './WindowsComponent';
import styled from 'styled-components';
import cv from '../../assets/images/cv.png'

const CVImage = styled.img`
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
`;

export function WindowsCV({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <WindowsComponent
            title="Jérémy Girard - CV"
            onClose={onClose}
            footerContent={
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
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
