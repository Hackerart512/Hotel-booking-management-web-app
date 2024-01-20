import React from 'react'

import "./update_room.css";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Slidebar from '../../components/slidebar/Slidebar';

const Add_room = () => {
    // id by on click on edit icon params 
    let params = useParams();

    // navigate declaration
    let navigate = useNavigate();

    // it's handle click function
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);
        const response = await fetch(`http://localhost:5000/rooms/updateroom/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
        let data = await response.json();
        // console.log(data);
        if (data.success) {
            navigate('/admin/view-room')
        }

    }

    const [formData, setFormData] = useState({});


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }


    return (
        <>
            <div className="slider-root">
                <Slidebar/>
                <div className="dashbord-body-container">
                    <div className="update-room">
                        <h1 style={{ "font-family": "cursive", "text-align": "center" }}>Update Room</h1>

                        <form onSubmit={handleSubmit}  method="PUT" action={`"http://localhost:5000/rooms/updateroom/${params.id}"`}className="add-room-form">
                            <div class="inputclass">
                                <label class="labelclass" for="inputimage"><i class="fa-solid fa-image"></i></label>
                                <input onChange={handleChange} name="image" type="file" id="inputimage" class="inp" placeholder="Image" />
                            </div>

                            <div class="inputclass">
                                <label class="labelclass" for="inputtitle"><i class="fa-solid fa-heading"></i></label>
                                <input name="title" onChange={handleChange} type="text" class="inp" placeholder="Title" id="inputtitle" />
                            </div>

                            <div class="inputclass">
                                <label class="labelclass" for="inputdescription"><i class="fa-solid fa-audio-description"></i></label>
                                <input name="description" onChange={handleChange} type="text" class="inp" placeholder="Description" id="inputdescription" />
                            </div>
                            <div class="inputclass">
                                <label class="labelclass" for="inputadult"><i class="fa-solid fa-user"></i></label>
                                <input name="adult" onChange={handleChange} type="number" class="inp" placeholder="Adult" id="inputadult" />
                            </div>

                            <div class="inputclass">
                                <label class="labelclass" for="inputchild"><i class="fa-solid fa-child"></i></label>
                                <input name="child" onChange={handleChange} type="number" class="inp" placeholder="Child" id="inputchild" />
                            </div>

                            <div class="inputclass">
                                <label class="labelclass" for="inputtype"><i class="fa-solid fa-images"></i></label>
                                <input name="type" onChange={handleChange} type="text" class="inp" placeholder="Type" id="inputtype" />
                            </div>

                            <div class="inputclass">
                                <label class="labelclass" for="inputprice"><i class="fa-solid fa-indian-rupee-sign"></i></label>
                                <input name="price" onChange={handleChange} type="number" class="inp" placeholder="Price" id="inputprice" />
                            </div>

                            <button className="add-btn" type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_room
