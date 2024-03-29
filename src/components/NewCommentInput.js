import React, { useState, useEffect } from "react";
import "./NewCommentInput.css";
import baseURL from "../config";
import { useUser } from "../UserContext";

const NewCommentInput = (props) => {
  const [inputComment, setCommentValue] = useState("");
  const [inputName, setNameValue] = useState("");
  const [isAnonymous, setAnonymous] = useState(true);

  const { userId, userName, triggerBlink } = useUser();

  useEffect(() => {
    if (userName) setNameValue(userName);
  }, [userName]);

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleAnonymousChange = (event) => {
    setAnonymous(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputComment) {
      alert("Comment cannot be empty!");
      return;
    }

    const commentData = {
      parentId: props.parentId,
      content: inputComment,
      author: isAnonymous ? "Anonymous" : inputName,
      date: new Date(),
    };

    //console.log("comment post Data-----------",commentData);
    const commentDataJSON = JSON.stringify(commentData);

    fetch(`${baseURL}/api/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: commentDataJSON,
    })
      .then((response) => response.json())
      .then((data) => {
        setCommentValue("");
        setNameValue("");
        props.addNewComment(data);
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  };

  return (
    <div className="commentInput-container">
      <div className="commentInput-upper-container">
        <input
          className="input comment-input"
          type="text"
          onChange={handleCommentChange}
          value={inputComment}
          placeholder="Enter your comment here..."
        />
      </div>

      <div className="commentInput-lower-container">
        {!isAnonymous && (
          <input
            className="input author-input"
            type="text"
            placeholder="Name"
            onChange={handleNameChange}
            value={inputName}
          />
        )}

        <div className="comment-checkbox-container">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={handleAnonymousChange}
          />
          <label className="label-text">Anonymous</label>
        </div>

        {userId ? (
          <button className="reply-button" onClick={handleSubmit}>
            Reply
          </button>
        ) : (
          <button
            class="h-10 w-1/10 box-border text-white bg-gray-400 border-0 rounded-md transition-colors duration-100 text-base font-bold px-4"
            onClick={triggerBlink}
          >
            Reply
          </button>
        )}
      </div>
    </div>
  );
};

export default NewCommentInput;
