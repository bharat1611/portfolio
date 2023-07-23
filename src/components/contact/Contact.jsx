import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {MdOutlineEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i89jr4n', 'template_10hkrx8', form.current, 'sur4LbmCa8ZhnWMpf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id = "contact"> 
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className = "container contact__container">
      <div className="contact__options">
        <article className = "contact_option">
          <MdOutlineEmail className = "contact__option-icon"/>
          <h4>Email</h4>
          <h5>upadhyay.bharat.2017641@gmail.com</h5>
          <a href = "mailto:upadhyay.bharat.2017641@gmail.com" target = "_blank">
            Send a message</a>
        </article>

        <article className = "contact_option">
          <BsGithub className = "contact__option-icon"/>
          <a rel = 'www.github.com/bharat1611'><h4>Github</h4></a>
          <a href = "www.github.com/bharat1611">
          www.github.com/bharat1611/</a>
        </article>

        <article className = "contact_option">
          <BsLinkedin className = "contact__option-icon"/>
          <h4>Linkedin</h4>
          <a href = "https://www.linkedin.com/in/bharat-upadhyay-05b939223/">
          Connect</a>
        </article>
      </div>
      {/* End of options */}
      <form ref = {form} onSubmit={sendEmail}>
        <input type="text" name = 'name' placeholder='Your Full Name' required/>
        <input type = "email" name = 'email' placeholder='Your Email' required/>
        <textarea name = "message" rows = "7" placeholder='Your Message' required/>
        <button type = 'submit' className = 'btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
