import * as React from 'react';
import Particles from 'react-particles-js';

import './Particles.scss';

const RParticles: React.FC = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          size: {
            value: 3,
          },
          line_linked: {
            enable: true,
            color: '#b9b9b9',
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
      className='particles-canvas'
    />
  );
};

export default RParticles;
