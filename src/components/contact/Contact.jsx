import React from 'react'
import './contact.css'
import {RiMailSendLine} from 'react-icons/ri'
import {RiMessengerLine} from 'react-icons/ri'
import {RiTelegramLine} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1qvsva7', 'template_tmpalum', form.current, '6A7TOlxMZrseWalsG')

    e.target.reset()
  };

  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    
    <div className="container contact__container">

      {/* Left Side */}
      <div className="contact__options">
        <article className='contact__option'>
          <RiMailSendLine className='contact__option-icon' />
          <h4>Email</h4>
          <h5>artikov1208@gmail.com</h5>
          <a href="mailto:artikov1208@gmial.com" target='_blank' rel="noreferrer">Send me an email</a>
        </article>

        <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Oybek Artikov</h5>
          <a href="https://m.me/artikov08" target='_blank' rel="noreferrer">Send me a message</a>
        </article>

        <article className='contact__option'>
          <RiTelegramLine className='contact__option-icon'/>
          <h4>Telegram</h4>
          <h5>@artikxv</h5>
          <a href="https://t.me/artikxv" target='_blank' rel="noreferrer">Send me a telegram</a>
        </article>

      </div>

      {/* Right side */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact