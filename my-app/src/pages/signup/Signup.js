import React from 'react';
import './signup.css';
import { useState } from 'react';
// import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

export default function Signup() {

    
    // navigate declaration
    let navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        const check_input = document.querySelector('#exampleInputCheckbox:checked')  !== null;
        console.log("THIs is check" + check_input);

        if(check_input){
            event.preventDefault();
            // console.log(formData);
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' }
            })
            let json = await response.json();        
            console.log(json);
            if(json.success) {
                //redirect
                localStorage.setItem('token', json.authtoken);
                navigate('/')
            }
            setFormData("");
        }
        else{
            alert('accept privary policy..')
            setFormData("");
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
            <div className="SignUp-container">
                <div className="SignUp-title">
                    <h3 className='signp-heading'>SignUp</h3>
                    <form onSubmit={handleSubmit} method="POST" action="http://localhost:5000/signup" className="w3-container w3-light-grey">
                        <label htmlFor="exampleInputFname"></label>
                        <input onChange={handleChange} name="Fname" id="exampleInputFname" placeholder="First Name" className="w3-input w3-border-0" type="text" />

                        <label htmlFor="exampleInputLname"></label>
                        <input onChange={handleChange} name="Lname" id="exampleInputLname" placeholder='Last Name' className="w3-input w3-border-0" type="text" />

                        <label htmlFor='exampleInputEmail'></label>
                        <input onChange={handleChange} name="email"  id="exampleInputEmail" placeholder="Email (Username)" className="w3-input w3-border-0" type="email" />

                        <label htmlFor="exampleInputCountry"></label>
                        <input onChange={handleChange} name="country" id="exampleInputCountry" placeholder='Contry' className="w3-input w3-border-0" type="text" />

                        <label htmlFor="exampleInputPasword"> </label>
                        <input onChange={handleChange} name="password" id="exampleInputPasword" placeholder="Password" className="w3-input w3-border-0" type="password" />

                        <label htmlFor="exampleInputRpasword" ></label>
                        <input onChange={handleChange} name="rpassword" id="exampleInputRpasword" placeholder='Repeat Password' className="w3-input w3-border-0" type="password" />

                        <div className="checkBoxContainer">
                            <input type="checkbox" id="exampleInputCheckbox" name="accept" />
                            <label className="examplecheckBoxlabel"for="exampleInputCheckbox"> I accept the<span  >privacy policy</span></label>
                        </div>
                        <button 
                            type="submit"
                            className="btnSIGNup">
                            SIGN UP
                        </button>
                    </form>
                </div>
                <div className="SignUp-details">
                    <h3 className="signDetainlsHeading">
                        Start Your juronry<br></br>
                        <span>
                            Today
                        </span>
                    </h3>
                    <img src="/IMAGE/giphy.webp" alt='images'/>
                </div>

            </div>
        </>
    )
}
