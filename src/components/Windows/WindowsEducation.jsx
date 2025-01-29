import React from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';
import styled from "styled-components";

export function WindowsEducation() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.CV) return null;

    return (
        <WindowsComponent
            title="Jérémy Girard - CV"
            onClose={() => toggleWindow('education')}>

        </WindowsComponent>
    );
}
