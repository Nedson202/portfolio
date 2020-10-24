import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { ENGINEER_NAME, SOCIAL_LINKS } from '../../settings';
import './Base.scss';

const Base: React.FC = () => {
  const socialLinks = SOCIAL_LINKS.map(({ link, icon, alt, id }) => {
    return (
      <a
        key={id}
        href={link}
        type='button'
        rel='noopener noreferrer'
        target='_blank'
      >
        <img
          className='github-icon'
          src={icon}
          alt={alt}
        />
      </a>
    );
  });

  return (
    <div className='base'>
      <div className='base-data'>
        <div className='base-info'>
          <p className='base-info__name'>Hi! I am {ENGINEER_NAME}.</p>
          <p className='base-info__detail'>
            Software Engineer currently working
            at Cosi Hospitality Group, Berlin, Germany. I enjoy working closely
            with all members across the development lifecycle of a product to solve common
            and complex problems.
            <br />
            <br />
            I enjoy listening to diverse genres of music(including Lo-fi while coding 😁). When I am not coding,
            you'll find me playing call Of duty, streaming insightful content and debates on youtube, reading books
            across genres like Philosophy, Business, and Fiction.
          </p>
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
      </div>
      <div className='base-social'>
        {socialLinks}
      </div>
    </div>
  );
};

export default Base;
