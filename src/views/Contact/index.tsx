import * as React from 'react';

import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <form
      name='contact'
      method='POST'
      data-netlify='true'
      className='contact'
    >
      <h2>Get In Touch</h2>
      <div className='contact-item'>
        <label>
          Name
          <span className='required-notation'>*</span>
        </label>
        <input type='text' name='name' />
      </div>
      <div className='contact-item'>
        <label>
          Email
          <span className='required-notation'>*</span>
        </label>
        <input type='email' name='email' />
      </div>
      <div className='contact-item'>
        <label>
          Message
          <span className='required-notation'>*</span>
        </label>
        <textarea
          name='message'
          rows={4}
        />
      </div>
      <div className='contact-cta'>
        <button type='submit' className='btn btn-primary'>
          Submit
          <i className='material-icons'>send</i>
        </button>
      </div>
    </form>
  );
};

export default Contact;
