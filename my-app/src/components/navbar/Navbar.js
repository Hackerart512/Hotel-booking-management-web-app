import React, { useEffect } from 'react';     // rf -> shortcut
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

export default function Navbar(probs) {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/Login');
    }

    const click = () => {
        let NavBar = document.querySelector(".navbar1");
        let line1 = document.querySelector(".line1");
        let line2 = document.querySelector(".line2");
        let line3 = document.querySelector(".line3");

        // clicker is a function to show a menu option
        line1.classList.toggle("change1");
        line2.classList.toggle("change2");
        line3.classList.toggle("change3");
        NavBar.classList.toggle("active");
    }

    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
        if(location.pathname){
                let loaded = document.querySelector("#se-pre-con")
                setTimeout( async function() {
                  await loaded.classList.add("addc");
                }, 1000) 
        }
    }, [location]);


    return (
        <>
            <div id="nav" class={probs.change} >
                <Link class="py-2 px-3 navbar-brand f-20" to="#">Royal Park</Link>

                <div className="navbar1">
                    <ul className="ul-navbar">
                        <li><Link className={`${location.pathname === "/" ? "active" : ""}`} to="/">HOME</Link></li>
                        <li><Link className={`${location.pathname === "/About" ? "active" : ""}`} to="/About">ABOUT US</Link></li>
                        <li><Link className={`${location.pathname === "/Rooms-Gallery" ? "active" : ""}`} to="/Rooms-Gallery"> GALLERY </Link></li>
                        <li><Link className={`${location.pathname === "/Contact" ? "active" : ""}`} to="/Contact">CONTACT</Link></li>


                        {!localStorage.getItem('token') ?
                            <li><Link to="/Login">LOGIN</Link></li>
                            : <li><Link className={`${location.pathname === "/Myprofile" ? "active" : ""}`} to="#">MY ACCOUNT</Link>
                                <ul class="dropdown-menu1">
                                    <li><Link class="dropdown-item" to="/Myprofile">My Profile</Link></li>
                                    <li><Link class="dropdown-item" to="/Mybooking">My Booking</Link></li>
                                </ul></li>
                        }
                        {!localStorage.getItem('token') ?
                            <li><Link className="active1" to="/Signup">SignUp</Link></li>
                            : <li><Link onClick={handleLogout} to="#">LOG OUT</Link></li>

                        }

                    </ul>
                </div>
                <button className="btn" onClick={click} type="button">
                    <div className="line1">-</div>
                    <div className="line2">-</div>
                    <div className="line3">-</div>
                </button>
            </div>
        </>
    )
}
