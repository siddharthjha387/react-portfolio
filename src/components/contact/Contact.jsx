import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';


import Github from '../../img/Github.png';
import Email from '../../img/email.png';
import Linkedin from '../../img/Linkedin.png';
import { ThemeContext } from '../../context';

function Contact() {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  const formRef=useRef();
  const [done,setDone]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_hoz8ndd', 'template_a85k1k5', formRef.current, 'Wtg1nKGMsn54G4RYa')
    .then((result) => {
        console.log(result.text);
        setDone(true);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
            Get In Touch
          </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />

              <a href="mailto:siddharthjha3901@gmail.com">Siddharth Jha</a>

            </div>

            <div className="c-info-item">
              <img src={Linkedin} alt="" className="c-icon" />

              <a href="https://www.linkedin.com/in/siddharth-8172261b3/">Siddharth Jha</a>

            </div>

            <div className="c-info-item">
              <img src={Github} alt="" className="c-icon" />

              <a href="https://github.com/siddharthjha387">siddharthjha387</a>

            </div>
          </div>

        </div>
        <div className="c-right">
          <p className="c-desc">
            CONTACT ME NOW
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  style={{backgroundColor: darkMode && "#333" }} type="text" name="from_name" placeholder='Name' />
            <input style={{backgroundColor: darkMode && "#333" }} type="text" name="subject" placeholder='Subject' />
            <input style={{backgroundColor: darkMode && "#333" }} type="email" name="email" placeholder='Email' />
            <textarea style={{backgroundColor: darkMode && "#333" }} name="message" rows="5" placeholder='Message'/>
            <button>Submit</button>
          </form>
          {done && " Thank You"}
        </div>
      </div>


    </div>
  )
}

export default Contact
