import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import MainHeader from '../../MainHeader/MainHeader'
import './Contact.css'
import isEmail from 'validator/lib/isEmail';
import { useTranslation } from 'react-i18next';

export default function Contact({ handleBackButton }) {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const nameRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();
  const alertRef = useRef();

  function validateForm() {
    let valid = true;

    const markInvalid = (ref) => {
      ref.current.style.border = '3px solid red';
      valid = false;
    };

    [nameRef, emailRef, titleRef, messageRef].forEach(ref => {
      ref.current.style.border = '';
    })

    if (!name.trim()) markInvalid(nameRef);
    if (!isEmail(email)) markInvalid(emailRef);
    if (!title.trim()) markInvalid(titleRef);
    if (!message.trim()) markInvalid(messageRef);

    return valid;
  }

  function colorAlertMessage(status) {
    if (status === 'error') {
      alertRef.current.style.color = "red"
    } else {
      alertRef.current.style.color = "white";
    }
  }

  const sendEmail = e => {
    e.preventDefault();

    if (isSending) return false;
    if (!validateForm()) return;
    setAlertMessage('');
    setIsSending(true);

    emailjs.send(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, {
      name: name,
      email: email,
      title: title,
      message: message
    }, {
      publicKey: process.env.REACT_APP_PUBLICKEY
    })
    .then(
      () => {
        setName('');
        setEmail('');
        setTitle('');
        setMessage('');
        setIsSending(false);
        setAlertMessage('E-mail enviado! :D');
        colorAlertMessage('success');
      },
      (error) => {
        setIsSending(false);
        console.log(error)

        setAlertMessage('Erro ao enviar o email. Por favor, tente novamente ou utilize a proxima opção.');
        colorAlertMessage('error');
      }
    );
  }

  return(
    <div>
      <MainHeader handleBackButton={handleBackButton} pageName={t("menu.contact")} />

      <div className='contact'>
        <div className='contact-intro'>
          <h2 className='text'>{t('contact.title')}</h2>
          <h6 className='text'>{t('contact.subtitle')}</h6>
        </div>

        <h3 className='text'>{t('contact.form.sendTo')}</h3>
        <form className='form-email text' onSubmit={sendEmail}>
          <label htmlFor="name">{t('contact.form.name')}</label>
            <input onChange={(e) => setName(e.target.value)} ref={nameRef} maxLength='61' id='name' name='name' autoComplete="on" className='input small-input' type='text' />
          <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} ref={emailRef} maxLength='61' id='email' name='email' autoComplete="on" className='input small-input' type='email' />
          <label htmlFor="title">{t('contact.form.subject')}</label>
            <input onChange={(e) => setTitle(e.target.value)} ref={titleRef} maxLength='61' id='title' name='title' className='input small-input' type='text' />
          <label htmlFor="message">{t('contact.form.message')}</label>
            <textarea onChange={(e) => setMessage(e.target.value)} ref={messageRef} id='message' name='message' className='input big-input' type='text' />
          <p className='alert-message' ref={alertRef}>{alertMessage}</p>
          <input className='submit' type='submit' value={isSending ? 'Enviando' : 'Enviar'} />
        </form>

        <h4 className='text'>{t('contact.alternative.text')}</h4>

        <a className='hrefmail' href="mailto:manoelgtcj@gmail.com">{t('contact.alternative.mailto')}</a>
      </div>
    </div>
  )
}
