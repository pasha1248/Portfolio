import React, { useState } from 'react'
import './Contact.css'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import good from '../../assets/My project (1).png'

const Contact = () => {
 
  const [state, setState] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_aj84gdp', 'template_1yre0cw', form.current, 'TphL9K8p-01_ktndq')
    setState(true)
    setTimeout(e => setState(false), 3000)
    e.target.reset()
  }
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMessage className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nalitzai@gmai.com</h5>
            <a href="mailto:nalitzai@gmai.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillFacebook className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>Pasha Ivashkiv</h5>
            <a href="https://www.facebook.com/pasha.ivashkiv" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Pavlo Ivashkiv</h5>
            <h5>
            <a href="tel:+380634274456">+380634274456</a>
            </h5>
            <a href="https://t.me/pavloivashkiv" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
      
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>

        </form>
        {state ? <img className='good' src={good} alt=''/> : ''}

      </div>
    </section>
  )
}


export default Contact