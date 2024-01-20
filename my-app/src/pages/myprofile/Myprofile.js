import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import './myprofile.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Myprofile = () => {
    let navigate = useNavigate();

    // PUT:http://localhost:5000/myprofile update user profile
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/myprofile', {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: {
                'auth-token': `${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        let json = await response.json();
        console.log(json);
        if (json.success) {
            //redirect
            navigate('/')
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
    // PUT:http://localhost:5000/myprofile update user profile


    // Show profile 
    const [profile, setProfiles] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/getuser', {
                    method: 'POST',
                    headers: { 'auth-token': `${localStorage.getItem('token')}` }
                })

                let json = await response.json();
                console.log(json.user);
                setProfiles(json.user);
            } catch (error) {
                console.error('Error fetching', error);
            }
        };
        fetchData();
        if (!localStorage.getItem('token'))
            navigate("/Login");
    }, []);
    // Show profile 



    return (
        <>
            <div className="myPeofileBody">
                <Navbar change="myprofile1" />
                {/* ..... */}
                <div style={{ "heigth": "auto" }} className="row align-items-center justify-content-center container-fluid">
                    <div className="ProfileDescription row my-3">
                        {
                            <div className="m-3 p-0 col-lg-6 Profilecard">
                                <img src="IMAGE/UseProfile.jpg" alt='images' />
                                {!profile.name ?
                                    <h5 className="m-3">{profile.Fname} {profile.Lname}</h5>
                                    : <h5 className="m-3">{profile.name}</h5>

                                }

                                <div className="ProfileCardDescription p-3">
                                    <strong>EMAIL : </strong>{profile.email}
                                    <br></br>
                                    <strong>STATE : </strong>{profile.state}
                                    <br></br>
                                    <strong>COUNTRY : </strong>{profile.country}
                                    <br></br>
                                    <strong>CITY: </strong>{profile.city}
                                    <br></br>
                                    <strong>ADRESS: </strong>{profile.address}
                                    <br></br>
                                    <strong>GENDER: </strong>{profile.gender}
                                    <br></br>
                                    <strong>CONTACT : </strong>{profile.contact}
                                </div>
                            </div>
                        }
                        <div className="col-lg-6 ProfilecardUpdate">
                            <h4>Change personal information</h4>
                            <form onSubmit={handleSubmit} method="PUT" action="http://localhost:5000/myprofile"  >

                                <div className="firstRow">
                                    <div className="FirstRowDiv1">
                                        <label htmlFor="exampleInputname">NAME</label>
                                        <input onChange={handleChange}placeholder='Full Name' className="ContactInput" id="exampleInputname" type="text" name="name" />
                                    </div>
                                    <div className="firstRowdiv2">
                                        <label htmlFor="exampleInputGender">Gender</label>
                                        <input onChange={handleChange} placeholder='Male/Female' className="ContactInput" id="exampleInputGender" type="text" name="gender" />
                                    </div>
                                </div>

                                <div className="secondRow">
                                    <div className="secondRowdiv1">
                                        <label htmlFor="exampleInputPhoneNumber">PHONE NUMBER</label>
                                        <input onChange={handleChange} placeholder='Mobile' className="ContactInput" id="exampleInputPhoneNumber" type="text" name="contact" />
                                    </div>
                                    <div className='secondRowdiv2'>
                                        <label htmlFor='exampleInputAddress'>STREET ADDRESS</label>
                                        <input onChange={handleChange} placeholder='Address' className="ContactInput" id="exampleInputAddress" type="text" name="address" />
                                    </div>
                                </div>

                                <div className="thirdRow">
                                    <div className="thirdRowdiv1">
                                        <label htmlFor="exampleInputCity">City</label>
                                        <input onChange={handleChange} placeholder='City Name' className="ContactInput" id="exampleInputCity" type="text" name="city" />
                                    </div>
                                    <div className='thirdRowdiv2'>
                                        <label htmlFor='exampleInputState'>State</label>
                                        <input onChange={handleChange} placeholder='State' className="ContactInput" id="exampleInputState" type="text" name="state" />
                                    </div>
                                </div>


                                <button type="submit" className="contactButton">Save Change</button>
                            </form>

                            <form>
                                <div className="secondRow-direction-column">
                                    <div className="secondRowdiv1">
                                        <label htmlFor="exampleInputPassword">PASSWORD</label>
                                        <input className="ContactInput" id="exampleInputPassword" type="Password" name="password" />
                                    </div>
                                    <div className='secondRowdiv2'>
                                        <label htmlFor='exampleInputRPassword'>NEW PASSWORD REAPEAT</label>
                                        <input className="ContactInput" id="exampleInputRPassword" type="password" name="rpassword" />
                                    </div>
                                </div>
                                <button type="submit" className="contactButton">Save Password</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* ..... */}
            </div>

            {/* footer */}
            <Footer />
        </>
    )
}

export default Myprofile;
