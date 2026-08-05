import React from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';
import cv from "../../assets/images/cv.png"
import cat from "../../assets/images/cat.jpg"

export function WindowsAbout() {
    const { windows, toggleWindow } = useWindowContext();

    const birthDate = new Date("2005-12-03");

    const getAge = () => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        const hasHadBirthday =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() &&
                today.getDate() >= birthDate.getDate());

        if (!hasHadBirthday) age--;

        return age;
    };

    if (!windows.About) return null;

    return (
        <WindowsComponent
            title="About me"
            onClose={() => toggleWindow('About')}
        >
            <p>Hi! My name is Jeremy Girard, I'm {getAge()} years old, and I'm currently a fourth-year Computer Science engineering student at CPE Lyon.</p>
            <br></br>
            <p>I love creating and always try to make the most of the tools at my disposal. </p>

            <br></br>
            also here's a cool cat (he looks cool)
            <img src={cat} alt={"cool cat"} width={300}/>
        </WindowsComponent>
    );
}
