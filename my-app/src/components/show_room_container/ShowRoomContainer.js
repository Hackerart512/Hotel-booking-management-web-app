import React from 'react'
import "./show_room_container.css"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowRoomContainer = () => {
  let params = useParams();
  const [rooms, setRoom] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/rooms/fetchroom/${params.id}`, {
          method: 'GET',
        }
        );

        if (!response.ok) {
          throw new Error('error');
        }
        const data = await response.json();
        setRoom(data);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching:-', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="row d-row image-box">
        <img className="col-4" src={"/IMAGE/" + rooms.image} alt="Imsges" />
        <img className="col-4" src={"/IMAGE/" + rooms.image} alt="IMAGE" />
        <img className="col-4" src={"/IMAGE/" + rooms.image} alt="IMAGE" />
      </div>
      <div style={{ "margin-top": "-36px" }} className="row mb-5 p-4 show-room-header container">
        
          
        
              <div className="d-flex col-lg-6 show-room-img-title">
                <img className="" src={"/IMAGE/" + rooms.image} alt="IMAGE" />
                <div className="show-room-title">
                  <h3 className='p-3'>{rooms.title}</h3>
                  <div className="show-room-facility-list">
                    <p className='mx-3'>2Bed</p>
                    <p className='mx-3'>Wifi</p>
                    <p className='mx-3'>Tv</p>
                    <p className='mx-3'>Gym</p>
                    <p className='mx-3'>Parking</p>
                  </div>
                </div>
              </div>
              <div className="d-flex col-lg-6 show-room-price">
              
               {rooms.price} Rs./Night
              </div>
      </div>

    </>
  )
}

export default ShowRoomContainer;
  