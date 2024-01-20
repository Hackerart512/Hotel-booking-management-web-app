import React from 'react'
import Slidebar from '../../components/slidebar/Slidebar'
import "./dashbord.css";
import Preloader from '../../components/preloader/Preloader';

const Dashbord = () => {
  return (
    <>
      {/* <Preloader/> */}
      <div className="slider-root">
        <Slidebar />
        <div className="dashbord-body-container">
          <div className="add-room">
            <h1>Dashbord</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashbord
