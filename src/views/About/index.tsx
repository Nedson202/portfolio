import * as React from 'react';
import avatarimage from '../../assets/samson-2.png';

import './About.scss';

const About: React.FC = () => {
  return (
    <div className='about'>
      <div className='about-data' />
      <div className='about-avatar'>
        <img src={avatarimage} alt='user avatar' />
      </div>
    </div>
  );
};

export default About;

