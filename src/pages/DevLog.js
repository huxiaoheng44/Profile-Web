import React from "react";
import "./DevLog.css"

const DevLog = () => {
    return (
        <div className="log-container">
            <h1>Development Log</h1>
            
            <div className="log-day">
                <h3>Tue Sep 26, 2023</h3>
                <h4>Add Comment Functionality and Other Updates</h4>
                <p>- Implemented the feature to add comments to messages.</p>
                <p>- Developed the back-end logic for processing and storing comments in the database.</p>
                <p>- Designed a clear and concise format for displaying comments.</p>
                <p>- Refined the style and layout of the MessageCard to enhance user experience.</p>
            </div>

            <div className="log-day">
                <h3>Mon Sep 25, 2023</h3>
                <h4>Added server and server-side routing</h4>
                <p>- Established a server to handle incoming requests.</p>
                <p>- Implemented server-side routing for different endpoints.</p>
                <p>- Set up database connectivity and data storage on the server.</p>
            
            
                <h4>Implemented message submission logic</h4>
                <p>- Developed front-end and back-end logic for submitting messages.</p>
                <p>- Ensured data validation and processing on the server.</p>
                
                <h4>Added comment functionality and comment list display</h4>
                <p>- Implemented the ability to add comments to messages.</p>
                <p>- Created a feature to display a list of comments for each message.</p>
            </div>
            
            <div className="log-day">
                <h3>Mon Sep 25, 2023</h3>
                <h4>Add message card display page</h4>
                <p>- Designed and implemented the message card layout.</p>
                <p>- Ensured responsive design for various screen sizes.</p>
                <p>- Integrated message data from the server to display on each card.</p>
            </div>

            <div className="log-day">
                <h3>Sat Sep 23, 2023</h3>
                <h4>Add draggable personal info card</h4>
                <p>- Implemented draggable functionality for personal info card.</p>
                <p>- Added smooth transition and snap effect to the draggable card.</p>
                <p>- Ensured that the personal info card is accessible and user-friendly.</p>
            </div>

            <div className="log-day">
                <h3>Sat Sep 23, 2023</h3>
                <h4>Add avatar and personal info Profile page</h4>
                <p>- Created a profile page to display user's avatar and personal information.</p>
                <p>- Designed a clean and intuitive user interface for the profile page.</p>
                <p>- Added the option for users to edit and update their personal information.</p>
            </div>

            <div className="log-day">
                <h3>Sat Sep 23, 2023</h3>
                <h4>Build skeleton of the web app</h4>
                <p>- Initialized the project structure and organized the files.</p>
                <p>- Set up essential dependencies and tools for development.</p>
                <p>- Drafted an initial design and flow for the web application.</p>
            </div>
        </div>
    );
};

export default DevLog;
