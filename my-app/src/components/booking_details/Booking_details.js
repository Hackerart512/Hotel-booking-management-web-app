import React from 'react'
import "./booking_details.css"
import { useEffect, useState } from 'react';


const Booking_details = () => {

  const [users, setUser] = useState([]);

  // outsite declare because you have to delete a booing then run a function and suddenly remove data , you havae do not need for navigate
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/costomerbooking/fetch', {
        headers: { 'auth-token': `${localStorage.getItem('token')}` }
      }
      );

      if (!response.ok) {
        throw new Error('error');
      }
      const data = await response.json();
      setUser(data);
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
  const BookingCancel = async (event) => {

    try {
      const response = await fetch(`http://localhost:5000/costomerbooking/deletebooking/${event.target.name}`, {
        method: 'delete',
        headers: { 'auth-token': `${localStorage.getItem('token')}` }
      }
      );

      if (!response.ok) {
        throw new Error('error');
      }
      const data = await response.json();
      // console.log(data)
      fetchData();
      alert("Your booking has been cencel...")

    } catch (error) {
      console.error('Error fetching:-', error);
    }
  }

  return (
    <>
      <div className='p-3 container booking-details'>

        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Image</th>
              <th>Customer_details</th>
              {/* <th>Room_type</th> */}
              {/* <th>Room_id</th> */}
              <th>Checkin/Checkout_date</th>
              <th>Booking date</th>
              <th>View</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((item) => (
                <>

                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={"/IMAGE/" + item.image}
                          alt="image.."
                          style={{ "width": "45px", "height": "45px" }}
                          className="rounded-circle"
                        />
                      </div>
                    </td>

                    <td>
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{item.name}</p>
                        <p className="text-muted mb-0">{item.email}</p>
                      </div>
                    </td>

                    <td>
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{item.date_from}</p>
                        <p className="text-muted mb-0">{item.date_to}</p>
                      </div>
                    </td>

                    <td>
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{item.date}</p>
                      </div>
                    </td>



                    <td>
                      <button style={{
                        "background-color": "#47a647",
                        "color": "white",
                        'border': 'none',
                        "border-radius": '6px',
                        "padding": "4px 9px"
                      }} type="button">
                        View Room
                      </button>
                    </td>

                    <td>
                      <button onClick={BookingCancel} style={{
                        "background-color": "#fd3c19",
                        "color": "white",
                        'border': 'none',
                        "border-radius": '6px',
                        "padding": "4px 9px"
                      }} name={item._id} type="button">
                        Cencel booking
                      </button>
                    </td>

                    {/* <tb>hu</tb> */}
                  </tr>
                </>
              ))
            }

          </tbody>
        </table>
      </div >
    </>
  )
}

export default Booking_details
