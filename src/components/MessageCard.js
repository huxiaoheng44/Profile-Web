import React, {forwardRef} from "react";
import "./MessageCard.css";
import NewMessageInput from "./NewMessageInput";
import NewCommentInput from "./NewCommentInput";

const MessageCard = forwardRef((props, ref) => {
    return(
        <div ref={ref}>
            <div className="message-container">
                <div className="author-info-container">
                    <span className="author-name">
                        {props.author}
                    </span>
                    <span className="release-date">
                        {props.date.toLocaleString()}
                    </span>
                </div>

                
                <div className="message">
                    {props.message}
                </div>

            </div>
            <div className="comment-container">
                <NewCommentInput />
            </div>
        </div>
    );
});

export default MessageCard;