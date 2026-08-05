import React from 'react';
import { useWindowContext } from '../../assets/scripts/WindowContext.jsx';
import { WindowsComponent } from './WindowsComponent.jsx';

export function WindowsInternshipSncf() {
    const { windows, toggleWindow } = useWindowContext();

    if (!windows.Sncf) return null;

    return (
        <WindowsComponent
            defaultPosition={{ x: 150, y: 150, width: 520, height: 520 }}
            title="Internship — SNCF"
            onClose={() => toggleWindow('Sncf')}
        >
            <div style={{ overflow: 'auto', height: 320 }}>
                <p>
                    This is a 3-year apprenticeship as part of my studies at CPE Lyon in the IRC program. I am working under GIRARD Jeremy (SNCF / DGA NUMERIQUE / e.SNCF Sol.FAST AOP ARCHI).
                </p>

                <ul style={{ padding: '1rem' }}>
                    <li style={{ marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.1rem', marginRight: '10px' }}>Role – Full‑Stack Developer</span>
                        <p>
                            I work as a full‑stack developer at SNCF: building tools and applications for SNCF developers, from tooling to production features.
                        </p>
                    </li>

                    <li style={{ marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.1rem', marginRight: '10px' }}>Notable projects</span>
                        <p>
                            • WCS (Web Component SNCF) — web components and shared UI primitives used across SNCF projects.
                        </p>
                        <p>
                            • Train Jaune — an application for tracking a train in the Pyrenees (intended for drivers to manage station stops and related operations).
                        </p>
                        <p>
                            • RADAR — an audit platform that scans repositories inside the ARESIS groups. RADAR uses a declaration file (.d2d.json) to reference projects
                            and runs dynamic analysis on declared components. (Référentiel and Audit of Developments and Applications referenced D2D)
                        </p>
                    </li>

                    <li style={{ marginBottom: '1rem' }}>
                        <span style={{ fontSize: '1.1rem', marginRight: '10px' }}>Tech & responsibilities</span>
                        <p>
                            I handle a wide range of tasks — from proofs of concept to development and production deployments. I work in multiple languages,
                            with a focus on Angular and Spring Boot for most production work.
                        </p>
                    </li>
                </ul>
            </div>
        </WindowsComponent>
    );
}

