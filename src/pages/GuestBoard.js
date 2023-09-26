import React,{ useState, useEffect} from "react";
import NewMessageInput from "../components/NewMessageInput";
import MessageBoard from "../layout/MessageBoard";

import "./GuestBoard.css"
import baseURL from "../config";

const GuestBoard = () => {

    const [messages,setMessages] = useState([]);
    const [messageLength, setMessageLength] = useState(0);

    useEffect(() => {
        fetch(`${baseURL}/api/messages`,
        {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            setMessages(data.reverse());
            setMessageLength(data.length);
        });
    },[]);


    // this will be called after submit a new message
    const addNewMessage = (newMessage) => {
        setMessages([newMessage,...messages]);
        setMessageLength(messageLength + 1);
    }

    return (
        <div className="guestBoard-container">
            <NewMessageInput addNewMessage={addNewMessage} messageLength={messageLength} />
            <MessageBoard messages={messages} />
        </div>
    );
}


export default GuestBoard;