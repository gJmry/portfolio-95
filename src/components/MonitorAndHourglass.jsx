import React from 'react';
import { Monitor, Hourglass } from 'react95';

const MonitorWithHourglass = () => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '200px' }}>
      <Monitor className="retro-monitor" backgroundStyles={{ background: 'blue' }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white'
        }}>
          <Hourglass size={32} style={{ margin: 20, color: 'white' }} />
        </div>
      </Monitor>
    </div>
  );
};

export default MonitorWithHourglass;
