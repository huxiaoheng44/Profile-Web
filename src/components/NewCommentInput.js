import React, { useState } from "react";
import "./NewCommentInput.css"

const NewCommentInput = () => {
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
        <div className="commentInput-container">
            <div className="commentInput-upper-container">
                <input 
                    className="input comment-input"
                    type="text" 
                    onChange={handleChange}
                    placeholder="Enter your comment here..." 
                />
            </div>

            <div className="commentInput-lower-container">
                {
                    !isAnonymous &&
                    <input 
                        className="input author-input"
                        type="text" 
                        placeholder="Author's name"
                    />
                }

                <div className="comment-checkbox-container">
                    <input 
                        type="checkbox" 
                        onChange={handleAnonymousChange}
                    />
                    <label className="label-text">Anonymous</label>
                </div>

                <button className="reply-button">Reply</button>
            </div>
        </div>
        );
};


export default NewCommentInput;