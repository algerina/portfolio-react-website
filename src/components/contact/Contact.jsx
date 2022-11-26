import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gy5w5ns', 'template_nv09ggr', form.current, 'QcWrvegg-9A41UAdg')
    e.target.reset()
     
    };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="contact__container container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <a href="mailto: kh.amelle@gmail.com" target="_blank" rel="noreferrer" >Send a message</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=+213773538105" target="_blank" rel="noreferrer">Send a message</a>
          </article>

        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
