import React,{useState, useEffect} from "react";
import NewMessageInput from "../components/NewMessageInput";
import MessageBoard from "../layout/MessageBoard";

import "./GuestBoard.css"


const GuestBoard = () => {

    const [messages,setMessages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/messages",
        {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            if (!Array.isArray(data)) {
                data = [data]; 
              }
            setMessages(data);
        });
    },[]);


    // this will be called after submit a new message
    const addNewMessage = (newMessage) => {
        setMessages([newMessage,...messages]);
    }

    return (
        <div className="guestBoard-container">
            <NewMessageInput addNewMessage={addNewMessage} />
            <MessageBoard messages={messages} />
        </div>
    );
}


export default GuestBoard;