import React from 'react'

import { useEffect, useState } from 'react';
import {
    Link,
} from 'react-router-dom';
import Slidebar from '../slidebar/Slidebar';

const View_type = () => {
    const [types, setType] = useState([]);

    // outsite declare because you have to delete a booing then run a function and suddenly remove data , you havae do not need for navigate
    const fetchData = async () => {
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


    // use to call one time fetchData funciton
    useEffect(() => {
        fetchData();
    }, []);


    // cancel booking funcition
    const DeleteRoomType = async (event) => {

        try {
            const response = await fetch(`http://localhost:5000/roomtype/deleteroomtype/${event.target.name}`, {
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

    return (
        <>
            <div className="slider-root">
               <Slidebar/>
                <div className="dashbord-body-container">
                    <div className="view-room">
                        <h1 style={{ "font-family": "cursive", "text-align": "center" }}>View Type</h1>

                        <table className="table align-middle mb-0 bg-white">
                            <thead className="bg-light">
                                <tr >
                                    <th>Id</th>
                                    <th>Type</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    types.map((item) => (
                                        <>

                                            <tr>
                                             
                                                <td>
                                                    <div className="ms-3">
                                                        <p className="fw-bold mb-1">{item._id}</p>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="ms-3">
                                                        <p className="fw-bold mb-1">{item.type}</p>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="ms-3">
                                                        <p className="fw-bold mb-1">{item.date}</p>
                                                    </div>
                                                </td>
                                               
                                                <td>
                                                    <Link to={"/admin/updateroom/"+item._id} style={{
                                                        "background-color": "#47a647",
                                                        "color": "white",
                                                        'border': 'none',
                                                        "border-radius": '6px',
                                                        "padding": "4px 9px",
                                                        "text-decoration":"none",
                                                        "width": "116px",
                                                        "height": "33px",
                                                    }} type="button">
                                                        Update Room
                                                    </Link>
                                                </td>

                                                <td>
                                                    <button onClick={DeleteRoomType} style={{
                                                        "background-color": "#fd3c19",
                                                        "color": "white",
                                                        'border': 'none',
                                                        "border-radius": '6px',
                                                        "padding": "4px 9px",
                                                        "width": "116px",
                                                        "height": "33px",
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

export default View_type
