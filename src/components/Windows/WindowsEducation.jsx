import React from 'react';
import {useWindowContext} from '../../assets/scripts/WindowContext.jsx';
import {WindowsComponent} from './WindowsComponent.jsx';
import {ScrollView} from "react95";

const educationTimeline = [
    {
        year: "🎓 High School",
        details: [
            "🏅 Mention Bien",
            "💻 Major: Digital & Computer Science (SIN)"
        ]
    },
    {
        year: "🏛️ BUT - 1st Year",
        details: ["🔵 C", "☕ Java", "🎨 HTML/CSS", "📊 Accounting", "🗄️ SQL"]
    },
    {
        year: "🏛️ BUT - 2nd Year",
        details: [
            "⚡ JavaScript", "🐘 PHP", "🎵 Symfony", "🟢 Vue.js",
            "📈 Management (Beginner)", "🔍 PLSQL"
        ]
    },
    {
        year: "🏛️ BUT - 3rd Year",
        details: ["🅰️ Angular", "🌱 Spring Boot", "📊 Management (Advanced)", "🍃 MongoDB"]
    }
];

export function WindowsEducation() {
    const {windows, toggleWindow} = useWindowContext();

    if (!windows.Education) return null;

    return (
        <WindowsComponent
            title="Education"
            onClose={() => toggleWindow('Education')}>
                <ScrollView style={{height: "250px", padding: "5px"}}>
                    {educationTimeline.map((entry, index) => (
                        <div key={index} style={{marginBottom: "10px"}}>
                            <strong>{entry.year}</strong>
                            <ul style={{paddingLeft: "20px"}}>
                                {entry.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ScrollView>
        </WindowsComponent>
    );
}
