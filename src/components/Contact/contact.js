import React, { useRef } from 'react'
import './contact.css'
import walmart from '../../Assets/walmart.png'
import Adobe from '../../Assets/adobe.png'
import Microsoft from '../../Assets/microsoft.png'
import facebook from '../../Assets/facebook.png'
import fbIcon from '../../Assets/facebook-icon.png'
import TwitterIcon from '../../Assets/twitter.png'
import youtubeIcon from '../../Assets/youtube.png'
import instaIcon from '../../Assets/instagram.png'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const notify = () => toast.success("Email sent!");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_fewz7ye', 'template_sjz2wqa', form.current, 'X8JVWSzVpHWVGkwIM')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
              }, (error) => {
              console.log(error.text);
          });
        };

  return (
    <section className='contactPage'>
        <div id='clients'>
       <h1 className='contact-title'>My Clients</h1>
       <p className='clientDesc'>I have had the opportunity to work with many companies.Some of the notable companies I have worked with includes</p>
        </div>
        <div className='clientImg'>
            <img src={walmart} alt='Clients' className='client-pic' />
            <img src={Adobe} alt='Clients' className='client-pic' />
            <img src={Microsoft} alt='Clients' className='client-pic' />
            <img src={facebook} alt='Clients' className='client-pic' />
        </div>
        <div id='contact'>
            <h1 className='contact-title top-text'>Contact Me</h1>
            <p className=' bottom-desc'>I am currently looking for new opportunities</p>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' placeholder='Your Name' className='contactInput' name='your_name' required={true} />
                <input type='email' placeholder='Your Email' className='contactInput' name='your_email' required={true} />
                <textarea placeholder='Your Message' name='message' rows="5" className='contactInput' required={true} />
                <button onClick={notify} type='submit' value='Send' className='contactBtn'>Send</button>
                <ToastContainer position='top-center' />
                <div className='links'>
                    <img src={fbIcon} alt='Social Links' className='link' />
                    <img src={TwitterIcon} alt='Social Links' className='link' />
                    <img src={youtubeIcon} alt='Social Links' className='link' />
                    <img src={instaIcon} alt='Social Links' className='link' />
                </div>
            </form>
        </div>
    </section>
    
  )
}

export default Contact
