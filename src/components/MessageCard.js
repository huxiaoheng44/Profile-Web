import React, {forwardRef} from "react";
import "./MessageCard.css";
import NewCommentInput from "./NewCommentInput";




const MessageCard = forwardRef((props, ref) => {

    let receivedDate;
    //console.log(props.date);
    if(props.date instanceof Date) {
        receivedDate = props.date;
    }else {
        receivedDate = new Date(props.date);
    }

    const formattedDate = (receivedDate).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });


    return(
        <div ref={ref}>
            <div className="message-container">
                <div className="author-info-container">
                    <span className="author-name">
                        {props.author}
                    </span>
                    <span className="release-date">
                        {formattedDate}
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