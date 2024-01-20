import React from 'react'
import './about.css';
import Navbar from '../../components/navbar/Navbar';
import Welcome_window from '../../components/welcome/Welcome_window';
import Footer from '../../components/footer/Footer';
import Facilities from '../../components/facilities/Facilities';
import HeadingBlock from '../../components/headingBlock/HeadingBlock';
import Preloader from '../../components/preloader/Preloader';

export default function About() {

  return (
    <>
        {/* <Preloader/> use when loading page and switch components */}
        <Navbar change="about" />
        <HeadingBlock heading="About Us" blockL="HOME " blockR="ABOUT US"/>
        <div className="my-2 Img_AboubtUs">
          <img src="IMAGE/about-us.png" alt='this is imgs'/>
        </div>
        <Welcome_window margin_top="0px"/>
        <Facilities/>
        <Footer/>
    </>
  )
}