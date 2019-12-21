import * as React from 'react';

import githubIcon from '../../assets/github.png';

import IFrame from '../IFrame';
import './ProjectCard.scss';

interface IProjectCardProps {
  projectData: IProjectData;
  setProjectID: any;
  currentProjectID: number;
}

interface IProjectData {
  key: number;
  title: string;
  image: any;
  description: string;
  link: string;
  githubLink: string;
}

const renderIFrame = (
  shouldTriggerID: number,
  currentProjectID: number,
  projectData: IProjectData,
  setProjectID: any,
) => {
  const { title, link } = projectData;

  if (shouldTriggerID !== currentProjectID) {
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <IFrame
      title={title}
      link={link}
      iframeCloser={() => setProjectID(0)}
    />
  );
};

const ProjectCard: React.FC<IProjectCardProps> = ({
  projectData, setProjectID, currentProjectID,
}) => {
  const {
    key, title, link, description, image, githubLink,
  } = projectData;

  return (
    <React.Fragment>
      <div className='project-card'>
        <div className='project-card--hr_set'>
          <hr />
          <hr />
          <hr />
        </div>
        <p className='project-card--title'>{title}</p>
        <div className='project-card--orb'>
          <img
            src={image}
            alt='art-museum'
            onClick={() => setProjectID(key)}
          />
        </div>
        <div className='project-card--details'>
          <p>
            {description}
          </p>
          <div className='project-card--details__cta'>
            <a
              href={githubLink}
              className='github-icon'
              type='button'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img src={githubIcon} width='25px' height='25px' alt='' />
            </a>
            <a
              href={link}
              className='btn btn-primary'
              type='button'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='material-icons-outlined md-36'>arrow_right_alt</i>
            </a>
          </div>
        </div>
      </div>

      {
        renderIFrame(
          key, currentProjectID, projectData, setProjectID,
        )
      }
    </React.Fragment>
  );
};

export default ProjectCard;
