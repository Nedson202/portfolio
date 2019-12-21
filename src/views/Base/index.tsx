import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { GET_TO_KNOW_ME } from '../../settings';
import './Base.scss';

const Base: React.FC = () => {
  return (
    <div className='base'>
      <div className='base-info'>
        <p className='base-info--name'>Hi, I'm Samson Negedu.</p>
        <p className='base-info--detail'>
          {GET_TO_KNOW_ME}
        </p>
      </div>
      <div className='base-cta'>
        <NavLink
          to='/projects'
          className='btn btn-primary'
        >
          Projects
        </NavLink>
        <i className='material-icons-outlined md-36'>arrow_right</i>
      </div>
    </div>
  );
};

export default Base;
