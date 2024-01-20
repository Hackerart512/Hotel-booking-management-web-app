import React from 'react'
import './rooms.css'
// import roomContext from '../../context/roomContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Rooms() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/rooms/fetchallroom');
                if (!response.ok) {
                    throw new Error('error');
                }
                const data = await response.json();
                setUsers(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching', error);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            <h2 style={{ "text-align": "center", "font-size": "9vh" }}>Our Rooms</h2>
            <div className=" row Rooms-container">
                {
                    users.map((item) => (
                        <>
                            <div data-name={item.type} className="col-lg-6 room-card">
                                <img style={{ "width": "100%", "height": "238px" }} src={"IMAGE/" + item.image} alt='imgs' />
                                <div className='row room-card-details'>
                                    <h5 className='p-0 mx-0'>{item.title}</h5>
                                    <img className='room-card-rating-img' src="IMAGE/5-star-rating-review-star-transparent-free-png.png" alt='images' />
                                    <p lassName='p-0 mx-0'>{item.description}</p>

                                    <Link style={{ "color": "white", "border": "0px" }} to={`/Showroom/${item._id}`} className="ml-13 col-6 room-card-btn ">BOOK NOW</Link>

                                    <h3 className="col-6" style={{
                                        "color": "orange", "display": "flex", "justify-content": "flex-end"
                                    }}>${item.price}</h3>
                                </div>
                            </div >
                        </>
                    ))
                }

            </div >
        </>
    )
}