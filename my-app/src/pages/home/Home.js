import React from 'react'
import Welcome_window from '../../components/welcome/Welcome_window';
import Room from '../../components/rooms/Rooms';
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Facilities from '../../components/facilities/Facilities';
import './home.css'
import Preloader from '../../components/preloader/Preloader';
 
export default function Home() {

  return (
    <>
      <Preloader/>
      <Navbar change="home" />
      <div className="container-fluid  d-flex flex-column justify-content-center align-items-center welcome_window">
        <p className="text-light" >Simple - uniqu - friendly</p>
        <h1 style={{ "font-size": "3.3rem", "text-align": "center" }} className="welcomeHeading text-light p-0 m-0" >Make yourself at home
          <br></br>in our
          <span>Hotel</span>.</h1>
      </div>

      <Welcome_window margin_top="0px" />
      <Room />
      <Facilities />
      <Footer />
    </>
  )
}
