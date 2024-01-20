import React from 'react'
import Slidebar from '../slidebar/Slidebar'
import "./add_room.css";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Add_room = () => {

    // room type show in select box
    const [types, setType] = useState([]);

    // outsite declare because you have to delete a booing then run a function and suddenly remove data , you havae do not need for navigate
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/roomtype/fetchallroomtype'
            );

            if (!response.ok) {
                throw new Error('error');
            }
            const data = await response.json();
            setType(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching:-', error);
        }
    };


    // use to call one time fetchData funciton
    useEffect(() => {
        fetchData();
    }, []);
    // room type show in select box

    // navigate declaration
    let navigate = useNavigate();

    // it's handle click function
    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);
        const response = await fetch('http://localhost:5000/rooms/addroom', {
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
                <Slidebar />
                <div className="dashbord-body-container">
                    <div className="add-room">
                        <h1 style={{ "font-family": "cursive", "text-align": "center" }}>Add Room</h1>

                        <form onSubmit={handleSubmit} method="POST" action="http://localhost:5000/rooms/addroom" encType="multipart/form-data" className="add-room-form">
                            <div class="inputclass">
                                <label class="labelclass" for="inputimage"><i class="fa-solid fa-image"></i></label>
                                <input onChange={handleChange} name="image_photo" type="file" id="inputimage" class="inp" placeholder="Image" />
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

                            <div style={{ "margin-top": "23px" }} class="inputclass">
                                <label class="labelclass" for="inputtype"><i class="fa-solid fa-images"></i></label>
                                <select name="type" onChange={handleChange} type="text" class="inp" placeholder="Type" id="inputtype">
                                    {
                                        types.map((item) => (
                                            <>
                                                <option value={item._id}>{item.type}</option>
                                            </>
                                        ))
                                    }
                                </select>
                            </div>

                            <div class="inputclass">
                                <label class="labelclass" for="inputprice"><i class="fa-solid fa-indian-rupee-sign"></i></label>
                                <input name="price" onChange={handleChange} type="number" class="inp" placeholder="Price" id="inputprice" />
                            </div>
                            <button className="add-btn" type="submit">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_room
