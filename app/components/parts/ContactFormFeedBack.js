'use client'
import React, { useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
const ContactFormFeedBack = () => {
  const form = useRef();
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_v3ldjsa', 'template_sv2p5u4', form.current, {
        publicKey: '5z210yM3PaitS8WcN',
        })
        .then(
        () => {
            alert('Сообщение отправлено!');
            console.log('SUCCESS!');
            setName('')
            setPhone('')
            setEmail('')
            setMessage('') 
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
        );
    };
  return (
    <form ref={form} onSubmit={sendEmail} action="">
        <div className="cardGroup">
            <label htmlFor="name" className="cardLabel">
                Ваше имя
                <span className="asteriskField">*</span>
            </label>
            <div className="cardInputContainer">
                <input required name="user_name" value={name} onChange={(e) => setName(e.target.value)} className="cardInput" type="text" placeholder="Имя" id='name'/>
            </div>
        </div>
        <div className="cardGroup">
            <label htmlFor="phone" className="cardLabel">Номер телефона
            <span className="asteriskField">*</span>
            </label>
            <div className="cardInputContainer"><input required value={phone} onChange={(e) => setPhone(e.target.value)} type="text" id="phone" className="cardInput" name='user_phone'/></div>
        </div>
        <div className="cardGroup">
            <label htmlFor="email" className="cardLabel">
            E-mail
            <span className="asteriskField">*</span>
            </label>
            <div className="cardInputContainer"><input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="cardInput" name='user_email'/></div>
        </div>
        
        <div className="cardGroup">
            <label htmlFor="message" id="message" className="cardLabel">
            Сообщение
            <span className="asteriskField">*</span>
            </label>
            <div className="cardInputContainer"><textarea required value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="" cols="40" rows="4" className="cardInput"></textarea></div>
        </div>
        <div className='cardButtonContainer'><button className="buttonPrimary" type="submit" value="Send">Отправить</button></div>
    </form>
  )
}

export default ContactFormFeedBack