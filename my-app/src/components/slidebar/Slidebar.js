import React from 'react'
import "./slidebar.css";
import { Link } from 'react-router-dom';

const Slidebar = () => {

    const RoomDropdown= () => {
        let drop_down = document.querySelector(".dropdown-dash");
        const toggleArrow = document.getElementById("arrow");
        toggleArrow.classList.toggle("arrow");
        drop_down.classList.toggle("show");
    }

    const FacilityDropdown = () => {
        let drop_down = document.querySelector(".dropdown-dash1");
        const toggleArrow = document.getElementById("arrow1");
        toggleArrow.classList.toggle("arrow");
        drop_down.classList.toggle("show");
    }

    const TypeDropdown = () => {
        let drop_down = document.querySelector(".dropdown-dash-type");
        const toggleArrow = document.getElementById("arrow-type");
        toggleArrow.classList.toggle("arrow");
        drop_down.classList.toggle("show");
    }

 

    return (
        <>
            <div className="slidebar">
                <Link style={{ "color": "white" }} className="py-2 px-3 navbar-brand f-20" to="#">Royal Park</Link>
                <div className="slider">
                    <ul className="ul-slider">
                        <li>
                            <Link to="/admin"><i class="icons fa-solid fa-table-cells-large"></i>Dashbord</Link>
                        </li>
 
                         
                         {/* Add type */}
                        <li style={{"flex-direction":"column"}}>
                            <Link to="#" onClick={TypeDropdown} className="dash-btn">
                                <i class="icons fa-solid  fa-plus"></i>
                                Room Type
                                <i style={{"margin-left":"23px"}}className="fa-solid fa-chevron-down" id="arrow-type"></i>
                            </Link>

                            <div className="dropdown-dash-type" id="dropdown">
                                <Link className="py-2" to="/admin/add-type">
                                    Add Type
                                </Link>
                                <Link className="py-2" to="/admin/view-type">
                                    View Type
                                </Link>
                            </div>
                        </li>
                         {/* Add type */}

                         {/* Add Room */}
                        <li style={{"flex-direction":"column"}}>
                            <Link to="#" onClick={RoomDropdown} className="dash-btn">
                            <i class="icons fa-solid fa-plus"></i>
                                Room
                                <i style={{"margin-left":"23px"}}className="fa-solid fa-chevron-down" id="arrow"></i>
                            </Link>

                            <div className="dropdown-dash" id="dropdown">
                                <Link className="py-2" to="/admin/add-room">
                                    Add room
                                </Link>
                                <Link className="py-2" to="/admin/view-room">
                                    View room
                                </Link>
                            </div>
                        </li>
                         {/* Add Room */}

                         {/* Add Facility */}
                        <li style={{"flex-direction":"column"}}>
                            <Link to="#" onClick={FacilityDropdown} className="dash-btn">
                            <i class="icons fa-solid fa-plus"></i>
                                Add facilities
                                <i style={{"margin-left":"23px"}}className="fa-solid fa-chevron-down" id="arrow1"></i>
                            </Link>

                            <div className="dropdown-dash1" id="dropdown">
                                <Link className="py-2" to="/admin/add-room">
                                    Add Add facilities
                                </Link>
                                <Link className="py-2" to="#draft">
                                    View Add facilities
                                </Link>
                            </div>
                        </li>
                         {/* Add Facility */}

                       
                        <li>
                            <Link to="/admin/logout"><i class="icons  fa-solid fa-right-from-bracket"></i>  Log Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Slidebar
