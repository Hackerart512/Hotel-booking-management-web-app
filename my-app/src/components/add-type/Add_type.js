import React from 'react'
import Slidebar from '../slidebar/Slidebar';
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add_type = () => {

    let navigate = useNavigate();

    const [formData, setFormData] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);
        const response = await fetch('http://localhost:5000/roomtype/addtype', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
        let json = await response.json();
        console.log(json);
        if (json.success) {
            navigate('/admin')
        }
        setFormData("");

    }


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
                <Slidebar />
                <div className="dashbord-body-container">
                    <div className="add-type">
                        <h1 className="my-5" style={{ "font-family": "cursive", "text-align": "center" }}>Add Room Type</h1>

                        <form onSubmit={handleSubmit} method="POST" action="http://localhost:5000/roomtype/addtype" className="add-room-form">

                            <div class="inputclass">
                                <label class="labelclass" htmlFor="inputtype"><i className="fa-solid fa-images"></i></label>
                                <input name="type" onChange={handleChange} type="text" className="inp" placeholder="Type" id="inputtype" />
                            </div>

                            <button type="submit" className="add-btn" >HIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_type
