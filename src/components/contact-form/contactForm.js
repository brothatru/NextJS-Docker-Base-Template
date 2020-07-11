import { useState } from 'react';
import styles from './contactForm.module.scss';

const config = {
  script:
    'https://script.google.com/macros/s/AKfycbx9XF_VGYdZQoALe4UH3TFyyVMsbENMPMVwp7ZORg/exec',
  sheet: 'Contact Form Responses',
  email: 'chanpark93@gmail.com',
};

const Thanks = ({ name }) => (
  <div className={styles.thankyou}>
    <h2>Thanks for contacting us, {name}! We will get back to you soon!</h2>
  </div>
);

export default () => {
  const initialForm = {
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    honeypot: '',
  };

  const [info, setInfo] = useState(initialForm);

  const { name, organization, email, phone, subject, message, honeypot } = info;

  const initialState = {
    sent: false,
    clicked: false,
  };

  const [state, setState] = useState(initialState);

  const { sent, clicked } = state;

  const handleChange = (e) => {
    e.preventDefault();
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // loading
    setState({ clicked: true });

    //sent
    const setSent = () => {
      setState({ sent: true });
    };

    // check if bot
    if (honeypot) return false;

    // sending through xhr as axios won't work (CORS)
    const xhr = new XMLHttpRequest();
    xhr.open('POST', config.script);
    // xhr.withCredentials = true
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function xhrGo() {
      setSent();
    };

    const encoded = Object.keys(info)
      .map((k) => {
        return `${encodeURIComponent(k)}=${encodeURIComponent(info[k])}`;
      })
      .join('&');

    // finally sending
    xhr.send(encoded);
    return true;
  };

  return (
    <>
      {sent ? (
        <Thanks name={name} />
      ) : (
        <form className={styles.form} onSubmit={(e) => handleClick(e)}>
          <div className={styles.double}>
            <fieldset className='honeypot-field' style={{ display: 'none' }}>
              <label htmlFor='honeypot'>
                <input
                  onChange={handleChange}
                  id='honeypot'
                  key='honeypot'
                  type='text'
                  name='honeypot'
                  value={honeypot}
                />
              </label>
            </fieldset>
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
          {clicked ? (
            <button type='button' disabled>
              Loading
            </button>
          ) : (
            <button type='submit'>Submit</button>
          )}
        </form>
      )}
    </>
  );
};
