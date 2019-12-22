import * as React from 'react';

import { IContactFormValues, IEvent } from '../../types';
import './Contact.scss';
import ContactForm from './ContactForm';

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contact: React.FC = () => {
  const defaultFormData: IContactFormValues = {
    name: '',
    email: '',
    message: '',
  };

  const [formValues, setFormValues] = React.useState(defaultFormData);

  const handleChange = (event: any) => {
    event.preventDefault();

    const { name, value } = event.target;

    formValues[name] = value;

    setFormValues({ ...formValues });
  };

  const handleSubmit = (event: IEvent) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formValues }),
    })
      .then(() => {
        alert('Success!');
        setFormValues(defaultFormData);
      })
      .catch((error) => alert(error));

    event.preventDefault();
  };

  return (
    <ContactForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formValues={formValues}
    />
  );
};

export default Contact;
