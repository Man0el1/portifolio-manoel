import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import MainHeader from '../../MainHeader/MainHeader'
import './Contact.css'
import isEmail from 'validator/lib/isEmail';

export default function Contact({ handleBackButton }) {
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
      <MainHeader handleBackButton={handleBackButton} pageName={'Contato'} />

      <div className='contact'>
        <div className='contact-intro'>
          <h2 className='text'>Interessado em me contatar? Sinta-se livre em utilizar meu e-mail.</h2>
          <h6 className='text'>(É até mais capaz de eu olhar sua mensagem assim...)</h6>
        </div>

        <h3 className='text'>Enviar para manoelgtcj@gmail.com</h3>
        <form className='form-email text' onSubmit={sendEmail}>
          <label htmlFor="name">Nome</label>
            <input onChange={(e) => setName(e.target.value)} ref={nameRef} maxLength='61' id='name' name='name' autoComplete="on" className='input small-input' type='text' />
          <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} ref={emailRef} maxLength='61' id='email' name='email' autoComplete="on" className='input small-input' type='email' />
          <label htmlFor="title">Título</label>
            <input onChange={(e) => setTitle(e.target.value)} ref={titleRef} maxLength='61' id='title' name='title' className='input small-input' type='text' />
          <label htmlFor="message">Mensagem</label>
            <textarea onChange={(e) => setMessage(e.target.value)} ref={messageRef} id='message' name='message' className='input big-input' type='text' />
          <p className='alert-message' ref={alertRef}>{alertMessage}</p>
          <input className='submit' type='submit' value={isSending ? 'Enviando' : 'Enviar'} />
        </form>

        <h4 className='text'>Ou se preferir contato usando o seu cliente de e-mail padrão...</h4>

        <a className='hrefmail' href="mailto:manoelgtcj@gmail.com">Enviar e-mail para manoelgtcj@gmail.com</a>
      </div>
    </div>
  )
}
