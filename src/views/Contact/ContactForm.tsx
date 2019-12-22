import * as React from 'react';

import { IContactFormValues } from '../../types';
import './Contact.scss';

interface IContactFormProps {
  handleChange: any;
  handleSubmit: any;
  formValues: IContactFormValues;
}

const ContactForm: React.FC<IContactFormProps> = ({
  handleChange, handleSubmit, formValues,
}) => {
  const { name, email, message } = formValues;

  return (
    <form
      className='contact'
      onSubmit={handleSubmit}
      method='POST'
      netlify-honeypot='bot-field'
      data-netlify='true'
    >
      <h2>Get In Touch</h2>
      <div className='contact-item'>
        <label>
          Name
          <span className='required-notation'>*</span>
        </label>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          value={name}
        />
      </div>
      <div className='contact-item'>
        <label>
          Email
          <span className='required-notation'>*</span>
        </label>
        <input
          type='email'
          name='email'
          onChange={handleChange}
          value={email}
        />
      </div>
      <div className='contact-item'>
        <label>
          Message
          <span className='required-notation'>*</span>
        </label>
        <textarea
          name='message'
          rows={4}
          onChange={handleChange}
          value={message}
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

export default ContactForm;
