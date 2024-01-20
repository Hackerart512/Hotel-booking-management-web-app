import React from 'react'
import './showRoom.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ShowRoomContainer from '../../components/show_room_container/ShowRoomContainer';
import RoomDescription from '../../components/room_description/RoomDescription';

const ShowRoom = () => {
    return (
        <>
            <Navbar change="showroom" />
            <ShowRoomContainer />
            <RoomDescription />
            <Footer />
        </>
    )
}

export default ShowRoom
