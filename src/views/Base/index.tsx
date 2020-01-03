import * as React from 'react';
import { NavLink } from 'react-router-dom';

import avatarimage from '../../assets/samson-2.png';

import { ENGINEER_NAME, GET_TO_KNOW_ME } from '../../settings';
import './Base.scss';

const Base: React.FC = () => {
  return (
    <div className='base'>
      <div className='base-data'>
        <div className='base-avatar'>
          <img src={avatarimage} alt='user avatar' />
        </div>
        <div className='base-info'>
          <p className='base-info__name'>Hi! I'm {ENGINEER_NAME}.</p>
          <p className='base-info__detail'>
            {GET_TO_KNOW_ME}
          </p>
        </div>
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
