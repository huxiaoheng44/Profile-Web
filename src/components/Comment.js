import React from "react";
import "./Comment.css"

const Comment = (props) => {
    
    const avatarFilename = randomAvatar();
    const avatarSrc = `${process.env.PUBLIC_URL}/comment-avatar/${avatarFilename}`;

    const formattedDate = new Date(props.date).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return (
        <div className="comment-container">
            <div className="comment-avatarAndInfo-container">
                <div className="comment-avatar-conatiner">
                    <img src={avatarSrc} className="comment-avatar-image" alt="comment-avatar"/>
                </div>
                <div className="comment-textInfo-block">
                    <div className="authorAndDate-container">
                        <div className="comment-author">
                            {props.author}
                        </div>
                        <div className="comment-date">
                            {formattedDate}
                        </div>
                    </div>
                    <div className="comment-content">
                        {props.content}
                    </div>
                 </div>
            </div>


        </div>
    );
}

function randomAvatar(){
    return Math.floor(Math.random() * 6) + 1 + ".png";
}

export default Comment;