import { useState } from 'react';
import styles from './contactForm.module.scss';

export default () => {
  const date = new Date();

  const initialState = {
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    date: date,
  };

  const [info, setInfo] = useState(initialState);

  const { name, organization, email, phone, subject, message } = info;

  const handleChange = (e) => {
    e.preventDefault();
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.double}>
        <input
          type='text'
          name='name'
          autoComplete='no'
          value={name}
          onChange={handleChange}
          placeholder='Name'
          required
        />
        <input
          type='text'
          name='organization'
          autoComplete='no'
          value={organization}
          onChange={handleChange}
          placeholder='Organization'
          required
        />
      </div>
      <div className={styles.double}>
        <input
          type='email'
          name='email'
          autoComplete='no'
          value={email}
          onChange={handleChange}
          placeholder='Email Address'
          required
        />
        <input
          type='text'
          name='phone'
          autoComplete='no'
          value={phone}
          onChange={handleChange}
          placeholder='Phone Number'
          required
        />
      </div>
      <div className={styles.email}>
        <input
          type='text'
          name='subject'
          autoComplete='no'
          value={subject}
          onChange={handleChange}
          placeholder='Subject'
          required
        />
        <textarea
          rows='7'
          cols='50'
          name='message'
          value={message}
          onChange={handleChange}
          placeholder='Write your message here'
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};
