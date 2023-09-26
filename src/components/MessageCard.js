import React, {forwardRef, useState, useEffect} from "react";
import "./MessageCard.css";
import NewCommentInput from "./NewCommentInput";
import Comment from "./Comment";
import baseURL from "../config";


const MessageCard = forwardRef((props, ref) => {

    const [comments,setComments] = useState([]);
    const [commentLength,setCommentLength] = useState(0);
    let receivedDate = new Date(props.date);

    useEffect(() => {
        fetch(`${baseURL}/api/comments/${props.messageId}`,
        {
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("I want to get comment LIST___________",data)
            setComments(data);
            setCommentLength(data.length);
        });
    },[]);

    const formattedDate = (receivedDate).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    const addNewComment = (newComment) => {
        setComments([newComment,...comments]);
        setCommentLength(commentLength + 1);
    }


    console.log("Lets see what is inside the COMMENTS__________", comments);
    return(
        <div ref={ref} className="messagecard-and-comment">
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
                    {props.content}
                </div>

            </div>
            <div className="comment-container">
                <div className="comment-list">
                    {
                        comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <Comment content={comment.content} author={comment.author} date={comment.date} parentId={props.messageId} />
                            ))
                        ) : (
                            <div className="no-comment">
                                No comments yet.
                            </div>
                        )
                    }
                </div>
                <NewCommentInput className="comment-lower-part" parentId={props.messageId} addNewComment={addNewComment} />
            </div>
        </div>
    );
});

export default MessageCard;