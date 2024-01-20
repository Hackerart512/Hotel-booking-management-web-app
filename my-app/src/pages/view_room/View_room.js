import React from 'react'
import Slidebar from '../../components/slidebar/Slidebar'
import { useEffect, useState } from 'react';
import {
    Link,
} from 'react-router-dom';

const View_room = () => {
    const [rooms, setRoom] = useState([]);

    // outsite declare because you have to delete a booing then run a function and suddenly remove data , you havae do not need for navigate
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/rooms/fetchallroom');

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


    // use to call one time fetchData funciton
    useEffect(() => {
        fetchData();
    }, []);


    // cancel booking funcition
    const DeleteRoom = async (event) => {
        if (window.confirm("Are you sure you want to deleted room ?")) {
            try {
                const response = await fetch(`http://localhost:5000/rooms/deleteroom/${event.target.name}`, {
                    method: 'delete',
                }
                );

                if (!response.ok) {
                    throw new Error('error');
                }
                const data = await response.json();
                let deleted = await fetchData();

                if (data.success) {
                    alert("Are you sure you want to deleted room ?")
                }
                // console.log(data)

            } catch (error) {
                console.error('Error fetching:-', error);
            }
        }
    }

    return (
        <>
            <div className="slider-root">
                <Slidebar />
                <div className="dashbord-body-container">
                    <div className="view-room">
                        <h1 style={{ "font-family": "cursive", "text-align": "center" }}>View Room</h1>

                        <table className="table align-middle mb-0 bg-white">
                            <thead className="bg-light">
                                <tr>
                                    <th >Image</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Adult</th>
                                    <th>Child</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    rooms.map((item) => (
                                        <>

                                            <tr>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src={"/IMAGE/" + item.image}
                                                            alt="image.."
                                                            style={{ "width": "150px", "height": "150px" }}
                                                            className=""
                                                        />
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="ms-3">
                                                        <p className="fw-bold mb-1">{item.title}</p>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="ms-3">
                                                        <p className="fw-bold mb-1">{item.description}</p>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="ms-3">
                                                        <p className="fw-bold mb-1">{item.adult}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="ms-3">
                                                        <p className="fw-bold mb-1">{item.child}</p>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="ms-3">
                                                        <p className="fw-bold mb-1">{item.price}</p>
                                                    </div>
                                                </td>

                                                <td>
                                                    <Link to={"/admin/updateroom/" + item._id} style={{
                                                        "background-color": "#47a647",
                                                        "color": "white",
                                                        'border': 'none',
                                                        "border-radius": '6px',
                                                        "padding": "4px 9px",
                                                        "text-decoration": "none",

                                                    }} type="button">
                                                        Update Room
                                                    </Link>
                                                </td>

                                                <td>
                                                    <button onClick={DeleteRoom} style={{
                                                        "background-color": "#fd3c19",
                                                        "color": "white",
                                                        'border': 'none',
                                                        "border-radius": '6px',
                                                        "padding": "4px 9px",

                                                    }} name={item._id} type="button">
                                                        Delete Room
                                                    </button>
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View_room
