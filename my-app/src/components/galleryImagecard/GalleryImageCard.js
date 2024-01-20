import React from "react";
import './galleryImagecard.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default (GalleryImageCard) => {

    const [users, setUsers] = useState([]);
    const [types, setType] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/rooms/fetchallroom');
            if (!response.ok) {
                throw new Error('error');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching', error);
        }
    };


    // fetch room type show on button
    const fetchDatatype = async () => {
        try {
            const response = await fetch('http://localhost:5000/roomtype/fetchallroomtype');

            if (!response.ok) {
                throw new Error('error');
            }
            const data = await response.json();
            setType(data);
            // console.log(data);
        } catch (error) {
            console.error('Error fetching:-', error);
        }
    };


    // because fetchData call after each click
    useEffect(() => {
        fetchData();
        fetchDatatype();
    }, []);
    
    
    
    
    let btn_switch = document.querySelectorAll('.image-gallery button');
    let card_container = document.querySelectorAll(".show-container .gallery-card");
    const button_cliker = async(e) => {
        let active_class = await document.querySelector(".active")
        await active_class.classList.remove("active")
        await e.target.classList.add("active")

        card_container.forEach(card => {
            card.classList.add("hide")
            if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
                card.classList.remove("hide")
                e.target.classList.add("show");
            }

        })
    }

    btn_switch.forEach((btn) => {
        btn.addEventListener('click', button_cliker);
    })
    // // console.log(btn_switch);

    return (
        <>
            <div className="image-gallery">

                <div className="buttons-container">
                    <button data-name="all" className="btn1 active" >Show all</button>

                    {
                        types.map((item) => (
                            <>
                                <button data-name={item._id} className="btn1">{item.type}</button>
                            </>
                        ))
                    }

                    {/* <button data-name="phone" className="btn1">Classic</button>
                    <button data-name="cloths" className="btn1" >Cloths</button>
                    <button data-name="shoes" className="btn1">Shoes</button> */}
                </div>

                <div className="show-container">
                    {
                        users.map((item) => (
                            <>
                                <div data-name={item.type} className="gallery-card">
                                    <img src={"IMAGE/" + item.image} alt="image" />
                                    <div className="card-body">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <Link to={`/Showroom/${item._id}`} className="gallery-card-btn">Book Now</Link>
                                    </div>
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>
        </>
    )
}
