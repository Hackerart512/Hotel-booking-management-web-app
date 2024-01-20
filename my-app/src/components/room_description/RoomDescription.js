import React from 'react'
import "./room_description.css"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RoomDescription = () => {
    // submit form
    // navigate declaration
    let navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [rooms, setRoom] = useState([]);

    // it's handle click function
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);
        const response = await fetch('http://localhost:5000/costomerbooking/addcustomer', {
            method: 'POST',
            body: JSON.stringify({
                  name: formData.name,
                  contact: formData.contact,
                  email: formData.email,
                  id: formData.id,
                  address: formData.address,
                  date_from: formData.date_from,
                  date_to: formData.date_to,

                  image:rooms.image,
                  title: rooms.title
            }),
            headers: { 'auth-token': `${localStorage.getItem('token')}`,
            'Content-Type':'application/json'
     }
        })
        let json = await response.json();
        console.log(json);
        if (json.success) {
            navigate('/')
        }
        else{
            console.log("erro")
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    // submit form



    // fetch room data by id
    let params = useParams();
    // console.log(rooms.image);

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
            <div className="row container room-description-container">
                <div className=" col-lg-6 room-description">
                    <h5>Room Description</h5>
                    <p>{rooms.description}
                    </p>
                    <p>Max audult: {rooms.adult}</p>
                    <p>Max child: {rooms.child}</p>
                    <p>Room facility 24 Houer survives</p>
                    <h5>Amenities</h5>
                    <p>GYm</p>
                    <p>GYm</p>
                    <p>GYm</p>
                    <p>GYm</p>
                    <p>GYm</p>
                    <p>GYm</p>
                    <h5>House Rules</h5>
                    <p>No smoking</p>
                    <p>No party</p>
                    <p>Keep silance</p>

                </div>
                <div className="col-lg-6 my-3 room-filup-form">
                    <h5 className="m-3">Fill Booking Details</h5>
                    <form  onSubmit={handleSubmit}  method="POST" action="http://localhost:5000/costomerbooking/addcustomer" className="m-0 w3-container w3-light-grey">
                        <label htmlFor="exampleInputname"></label>
                        <input onChange={handleChange} name="name" id="exampleInputname" placeholder="First Name" className="bg-white w3-input w3-border-0" type="text" />

                        <label  htmlFor="exampleInputcontact"></label>
                        <input onChange={handleChange} name="contact" id="exampleInputcontact" placeholder="Contact" className="bg-white w3-input w3-border-0" type="text" />

                        <label htmlFor="exampleInputemail"></label>
                        <input onChange={handleChange} name="email" id="exampleInputemail" placeholder="Email" className="bg-white w3-input w3-border-0" type="email" />

                        <div className="row firstRow">
                            <div className="col-lg-6 FirstRowDiv1">
                                <label htmlFor='exampleInputID'></label>
                                <select onChange={handleChange} placeholder="Choose ID type" className="bg-white " id="exampleInputID" type="select" name="id">
                                    <option value="Adhar">Adhar card</option>
                                    <option value="Pen card">Pen card</option>
                                </select>
                            </div>
                            <div className='col-lg-6 firstRowdiv2'>
                                <label htmlFor='exampleInputgender'></label>
                                <select onChange={handleChange} placeholder="Select gender" className="bg-white " id="exampleInputgender" type="select" name="gender">
                                    <option  value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>

                        <label htmlFor="exampleInputaddress"></label>
                        <input onChange={handleChange} name="address" id="exampleInputemail" placeholder="Address" className="bg-white w3-input w3-border-0" type="text" />

                        <label htmlFor="exampleInputcheckindate"></label>
                        <input onChange={handleChange} id="exampleInputcheckindate" className="bg-white w3-input w3-border-0" name="date_from" type="date"></input>

                        <label htmlFor="exampleInputcheckoutdate"></label>
                        <input onChange={handleChange} id="exampleInputcheckoutdate" className="bg-white w3-input w3-border-0" name="date_to" type="date"></input>

                        <button
                            type="submit"
                            style={{ "width": "100%", "border-radius": "6px" }}
                            className="btnSIGNup">
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RoomDescription
