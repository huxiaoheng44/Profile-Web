import React, { useState } from "react";
import "./NewMessageInput.css"


/**
 * 
 * @param {string} defaultText is the placeholder text
 * @param {string} messageId used for identify message
 * 
 */

const NewMessageInput = () => {

    const [inputMessage,setMessageValue] = useState("");
    
    // called whenever the user types in the new post input box
    const handleChange = (event) => {
        setMessageValue(event.target.value);
    };


    return (
        <div className="inputBar-container">
            <input 
            type="text" 
            onChange={handleChange}
            placeholder="Enter your message here..." />
            
            <button className="post-button">Post</button>
        </div>
    );
};


export default NewMessageInput;