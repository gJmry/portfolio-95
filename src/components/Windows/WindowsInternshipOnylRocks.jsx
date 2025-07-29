import React from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';

export function WindowsInternshipOnylRocks() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.OnylRocks) return null;

    return (
        <WindowsComponent
            defaultPosition={{ x: 150, y: 150, width: 500, height: 500 }}
            title="Internship Onyl Rocks"
            onClose={() => toggleWindow('OnylRocks')}
        >
            <div style={{ overflow: 'auto', height: 300 }}>
                <p>
                    During my second and third years of my Bachelor's in Computer Science (BUT), I completed both a
                    two-month internship and a one-year apprenticeship at
                    <strong> Onyl Rocks</strong>, a company specializing in <em>cybersecurity</em>,
                    <em> web development</em>, and <em>IT infrastructure</em>.
                </p>

                <ul style={{ padding: '1rem' }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <span style={{
                            fontSize: '1.2rem',
                            marginRight: '10px'
                        }}>Internship – Full-Stack Developer 🛠️</span>
                        <p>
                            My first project was with the platform <strong>MonJeuDeSociete.fr</strong>. I developed a custom web-based tool
                            that allows users to create interactive digital murals, inspired by projects like the “Climate Fresk”.
                            This tool was designed to be educational and collaborative.
                        </p>
                        <p>
                            I worked on both the frontend and backend using <strong>Symfony (PHP)</strong>, integrating with an existing codebase.
                            I also improved several features for better UX and helped debug existing components to make the platform more stable and user-friendly.
                        </p>
                    </li>

                    <li style={{ marginBottom: '1rem' }}>
                        <span style={{
                            fontSize: '1.2rem',
                            marginRight: '10px'
                        }}>Apprenticeship – Full-Stack Developer 🔐</span>
                        <p>
                            During my apprenticeship, I worked on a second project named <strong>Vigidomaine</strong>, a platform designed to monitor domain names
                            for security issues such as <em>typosquatting</em>, <em>SSL certificate problems</em>, and <em>domain expiration</em>.
                        </p>
                        <p>
                            I contributed to features like automated domain scanning, report generation, and the implementation of the <strong>VigiScore</strong>,
                            a metric that evaluates how secure and compliant a domain is with cybersecurity standards.
                        </p>
                        <p>
                            I collaborated closely with my project manager to define tasks, clarify technical requirements, and present feedback on ongoing work—
                            all within an agile development environment.
                        </p>
                    </li>
                </ul>
            </div>
        </WindowsComponent>
    );
}
