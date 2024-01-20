import React from "react";
import roomContext from "./roomContext";

const RoomState = ()=>{
    const state = {
        "name":"piyush"
    }
     return(
        <RoomState.Provider value={state}>
            {props.children}
        </RoomState.Provider>

     )
}

export default RoomState;