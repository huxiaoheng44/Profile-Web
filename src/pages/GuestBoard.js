import React from "react";
import NewMessageInput from "../components/NewMessageInput";
import MessageBoard from "../components/MessageBoard";

import "./GuestBoard.css"


const GuestBoard = () => {
    return (
        <div className="guestBoard-container">
            <NewMessageInput />
            <MessageBoard />
        </div>
    );
}


export default GuestBoard;