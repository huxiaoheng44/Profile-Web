import React, { useState } from "react";
import "./NewMessageInput.css";


/**
 * 
 * @param {string} defaultText is the placeholder text
 * @param {string} messageId used for identify message
 * 
 */

const NewMessageInput = () => {

    const [inputMessage,setMessageValue] = useState("");

    const [isAnonymous,setAnonymous] = useState(false);
    
    // called whenever the user types in the new post input box
    const handleChange = (event) => {
        setMessageValue(event.target.value);
    };

    const handleAnonymousChange = (event) => {
        setAnonymous(event.target.checked);
    }

    return (
        <div className="inputBar-container">
            <input 
                className="input message-input"
                type="text" 
                onChange={handleChange}
                placeholder="Enter your message here..." 
            />

            {
                !isAnonymous &&
                <input 
                    className="input author-input"
                    type="text" 
                    placeholder="Author's name"
                />
            }

            <div className="checkbox-container">
                <input 
                    type="checkbox" 
                    onChange={handleAnonymousChange}
                />
                <label className="label-text">Anonymous</label>
            </div>

            <button className="post-button">Post</button>
        </div>
        );
};


export default NewMessageInput;