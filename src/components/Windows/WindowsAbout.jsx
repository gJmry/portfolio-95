import React from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';
import { computeAge } from '../../utils/dateUtils.js';
import catImg from '../../assets/images/cat.jpg';

const BIRTH_DATE = '2005-12-03';

export function WindowsAbout() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.About) return null;

    return (
        <WindowsComponent
            title="About me"
            onClose={() => toggleWindow('About')}
            windowName="About"
        >
            <p>
                Hi! My name is Jeremy Girard, I'm {computeAge(BIRTH_DATE)} years old, and I'm currently a
                fourth-year Computer Science engineering student at CPE Lyon.
            </p>
            <br />
            <p>I love creating and always try to make the most of the tools at my disposal.</p>
            <br />
            also here's a cool cat (he looks cool)
            <img src={catImg} alt="cool cat" width={300} />
        </WindowsComponent>
    );
}
