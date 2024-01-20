import swal from 'sweetalert';
import React from 'react'
import './login.css';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'

export default function Login() {
    let navigate = useNavigate();

    const handleSubmit = async (event)=>{
        event.preventDefault();
        console.log(formData);
       const response = await fetch('http://localhost:5000/api/auth/login',{
           method : 'POST',
           body: JSON.stringify(formData),
           headers: {'Content-Type': 'application/json'
         //  "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZGNlM2JhYjYzZWVjZDA4YTM3ZTkwIn0sImlhdCI6MTY5MTI0NTQ0MX0.b7AVH-lSOjiJAUoQBZAasaM5hq-9JT4aqXYqXwEPHCM"
           }
       })
       const json= await response.json();
    //    console.log(json);
       if(json.success) {
        //redirect
          swal("Good job!", "You clicked the button!", "success", {
            button: "Aww yiss!",
          });
          localStorage.setItem('token', json.authtoken);
          navigate('/')
       }
       else{
        navigate('/Signup')
       }

    //    .catch((error) => {
    //             console.log("Error", error);
    //    })
    //    const data = await response.text();
    }

    const [formData, setFormData] = useState({});
    
    
    const handleChange =(event)=>{
        console.log(event.target.value,event.target.name);
    
        const {name , value} = event.target;
        setFormData({ 
            ...formData,
            [name] : value
        });
    }

    return (
        <>
            <div className="login_body">
                <div className="py-3 login_title">
                    <h3 className="login-heading">Login</h3>
                    <div className="icons">
                    <i class="face fa-brands fa-facebook"></i>
                    <i class="twit fa-brands fa-twitter"></i>
                    </div>
                    <p>use yout account</p>
                    <form className="login-form" onSubmit={handleSubmit} method="POST" action="http://localhost:5000/api/auth/login">
                        <div className="mb-3">
                            <label 
                                for="exampleInputEmail1" 
                                className="form-label">
                           </label>
                            <input 
                                onChange={handleChange} 
                                name="email" 
                                type="email"
                                placeholder="Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                             />
                        </div>

                        <div className="mb-3">
                            <label 
                                for="exampleInputPassword1" 
                                className="form-label">
                            </label>
                            <input
                                onChange={handleChange} 
                                name="password"
                                type="password" 
                                placeholder="Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                             />
                        </div>

                        <a>
                            Forget your password
                        </a>

                        <button 
                          type="submit" 
                          className="btnLogin">
                          LOG IN
                        </button>

                    </form>
                </div>

                <div className="loginDetais">   
                      <h3 class="welcome-heading"> WELCOME TO 
                            <span clssName="hotel-booking">
                             HOTEL BOOKING
                            </span>
                        MANGEMENT SYSTEM
                    </h3>     
                </div>
            </div>
        </>
    )
}
