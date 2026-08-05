import React from 'react';
import { Monitor, Hourglass } from 'react95';
import styled from 'styled-components';

const MonitorFrame = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
`;

const HourglassContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;

const MonitorWithHourglass = () => (
    <MonitorFrame>
        <Monitor className="retro-monitor" backgroundStyles={{ background: 'blue' }}>
            <HourglassContainer>
                <Hourglass size={32} style={{ margin: 20, color: 'white' }} />
            </HourglassContainer>
        </Monitor>
    </MonitorFrame>
);

export default MonitorWithHourglass;
