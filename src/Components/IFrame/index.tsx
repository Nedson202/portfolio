import * as React from 'react';
import './IFrame.scss';

interface IFrameProps {
  title: string;
  link: string;
  iframeCloser: any;
}

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();

    return;
  }

  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};

const IFrame: React.FC<IFrameProps> = ({ title, link, iframeCloser }) => {
  return (
    <div className='iframe'>
      <div className='iframe-header'>
        <p className='iframe-header--title'>{title}</p>

        <div className='iframe-header--action_buttons'>
          <button
            type='button'
            className='close-button'
            onClick={iframeCloser}
          >
            &times;
          </button>
          <button
            type='button'
            className='maximum-button'
            onClick={toggleFullScreen}
          >+
          </button>
        </div>
      </div>
      <iframe
        src={link}
        className='iframe-data'
        title='none'
      />
    </div>
  );
};

export default IFrame;
