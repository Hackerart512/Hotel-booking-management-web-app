import "./facilities.css";

import React from "react";

export default (Services) => {
  return(
    <>
        <h2 className="m-0" style={{"text-align": "center","font-size": "9vh"}}>Ous facilities</h2>
        <div className="row col-12 services-container">

            <div  className="col-lg-3 services-card-container">
                <div  className="services-card">
                    <img style={{"width":"65px","height":"65px","border-radius":"50%"}} src="IMAGE/free_wifi.jpg" alt='images'/>
                    <h4>Free Wireless Internet Access</h4>
                    <div>
                        <p>Lorem ipsum dolor sit am Lorem Ips Lorem</p>
                    </div>
                </div>
            </div>
            <div  className="col-lg-3 services-card-container">
                <div  className="services-card">
                    <img style={{"width":"65px","height":"65px","border-radius":"50%"}} src="IMAGE/food_service.jpg" alt='images' />
                    <h4>Food service 24/7 availability</h4>
                    <div>
                        <p>Lorem ipsum dolor sit am Lorem Ips Lorem</p>
                    </div>
                </div>
            </div>
            <div  className="col-lg-3 services-card-container">
                <div  className="services-card">
                    <img style={{"width":"65px","height":"65px","border-radius":"50%"}} src="IMAGE/food_service.jpg" alt='images'/>
                    <h4>24 Hour security service</h4>
                    <div>
                        <p>Lorem ipsum dolor sit am Lorem Ips Lorem</p>
                    </div>
                </div>
            </div>
        
            <div  className="col-lg-3 services-card-container">
                <div  className="services-card">
                    <img style={{"width":"65px","height":"65px","border-radius":"50%"}} src="IMAGE/food_service.jpg" alt='images'/>
                    <h4>24 Hour Doctor on call</h4>
                    <div>
                        <p>Lorem ipsum dolor sit am Lorem Ips Lorem</p>
                    </div>
                </div>
            </div>
            <div  className="col-lg-3 services-card-container">
                <div  className="services-card">
                    <img style={{"width":"65px","height":"65px","border-radius":"50%"}} src="IMAGE/room-service-pink.jpg" alt='images'/>
                    <h4>FOOD AND BEVERAGES</h4>
                    <div>
                        <p>Lorem ipsum dolor sit am Lorem Ips Lorem</p>
                    </div>
                </div>
            </div>
         

        </div>
    </>
  )
}
