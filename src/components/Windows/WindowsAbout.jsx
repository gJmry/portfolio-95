import React from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';
import cv from "../../assets/images/cv.png"
import cat from "../../assets/images/cat.jpg"

export function WindowsAbout() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.About) return null;

    return (
        <WindowsComponent
            title="About me"
            onClose={() => toggleWindow('About')}
        >
            <p>Hi ! My name is Jeremy Girard, and I'm a third-year Computer Science student at BUT Informatique, Lyon 1.
                This is my personal website—I hope you like it!</p>
            <br></br>
            <p>I love creating and always try to make the most of the tools at my disposal.
                Currently, I am working towards becoming an IT engineer!</p>

            <br></br>
            also here's a cool cat (he looks cool)
            <img src={cat} alt={"cool cat"} width={300}/>
        </WindowsComponent>
    );
}
