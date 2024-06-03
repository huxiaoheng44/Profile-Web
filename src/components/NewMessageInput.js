import React, { useEffect, useState } from "react";
import "./NewMessageInput.css";
import baseURL from "../config";
import { useUser } from "../UserContext";

/**
 *
 * @param {string} defaultText is the placeholder text
 * @param {string} messageId used for identify message
 * @param {string} author author's name
 * @param {Date} date the post time of message
 *
 */

const NewMessageInput = (props) => {
  const [inputMessage, setMessageValue] = useState("");
  const [inputAuthor, setAuthor] = useState("");
  const [isAnonymous, setAnonymous] = useState(true);

  const { userId, userName, triggerBlink } = useUser();

  useEffect(() => {
    if (userName) setAuthor(userName);
  }, [userName]);

  // called whenever the user types in the new post input box
  const handleMessageChange = (event) => {
    setMessageValue(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleAnonymousChange = (event) => {
    setAnonymous(event.target.checked);
  };

  // called when hits the botton, post message info
  const handleSubmit = (event) => {
    // prevent page refreshing and redirect to home page after submit button clicked
    event.preventDefault();

    if (!inputMessage) {
      alert("Message cannot be empty!");
      return;
    }

    const currentDate = new Date();

    const messageData = {
      messageId: props.messageLength,
      content: inputMessage,
      author: isAnonymous || inputAuthor === "" ? "Anonymous" : inputAuthor,
      date: currentDate,
    };

    // JavaScript type data can not be send
    const messageDataJSON = JSON.stringify(messageData);
    //sent post request
    // console.log(messageData);
    fetch(`${baseURL}/api/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: messageDataJSON,
    })
      .then((response) => response.json())
      .then((data) => {
        setMessageValue("");
        setAuthor("");
        console.log("I need more information to debug");
        console.log(data.body);
        props.addNewMessage(data);
      })
      .catch((error) => {
        console.error("Error posting message:", error);
      });
  };

  return (
    <div className="inputBar-container">
      <input
        className="input message-input"
        type="text"
        onChange={handleMessageChange}
        value={inputMessage}
        placeholder="Enter your message here..."
      />

      {!isAnonymous && (
        <input
          className="input author-input"
          type="text"
          placeholder="Name"
          value={inputAuthor}
          onChange={handleAuthorChange}
        />
      )}

      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={handleAnonymousChange}
        />
        <label className="label-text">Anonymous</label>
      </div>

      {userId ? (
        <button className="post-button" onClick={handleSubmit}>
          Post
        </button>
      ) : (
        <button
          className="h-10 w-1/10 box-border text-white bg-gray-400 border-0 rounded-md transition-colors duration-100 text-base font-bold px-4"
          onClick={triggerBlink}
        >
          Login to Post
        </button>
      )}
    </div>
  );
};

export default NewMessageInput;
