import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./mybooking.css";
import Booking_details from '../../components/booking_details/Booking_details';

const Mybooking = () => {
  return (
    <>
      <Navbar change="mybooking1"/>

      <div className='mybooking'>
        <h1 className='py-3' style={{"text-align":"center","color":"white","text-shadow": "0 0 10px black"}} >My Hotel Booking Details</h1>
        <Booking_details/>
      </div>
    </>
  )
}

export default Mybooking
