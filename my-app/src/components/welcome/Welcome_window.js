import React from 'react'
import './welcome.css'
import { Link } from 'react-router-dom';

export default function Welcome_window(probs) {
    return (
        <>
            <div style={{marginTop:`${probs.margin_top}`}} className="py-5 px-5 row cntainer-fluid" id="reception">
                    
                <div className="col-lg-6  receptionimg">
                    <img src="../IMAGE/reception.png" alt="img.." />
                </div>

                <div className="py-5 px-5 col-lg-6 rece-discription">
                     <h5 className="text-secondary text-align-left "  >ABOUT US</h5>
                     <h1 className=" BestHOlidayheading text-align-left  text-dark" >The best holidays<br></br>start here!</h1>
                     <p className='py-2'>Lorem Ipsum is Lorem Ipsum lorem, tempus lorem, sed diam nonumy eirmod tempor</p>
                     <Link className="about-btn" to="/About">About</Link>
                     
                </div>
            </div>
        </>
    )
}
