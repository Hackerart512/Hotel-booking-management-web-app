import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Contact_form from '../../components/contact-form/ContactForm';

import './contact.css'
import HeadingBlock from '../../components/headingBlock/HeadingBlock';
export default function Contact(){
  return(
    <>
       <Navbar change="contact" />
       <HeadingBlock heading="Contact Us" blockL="HOME " blockR="CONTACT US"/>
        <div className="Gif_contactUs">
          <img src="IMAGE/contact-us.gif" alt='images'/>
        </div>
        <Contact_form/>
        <Footer/>
    </>
  )
}
