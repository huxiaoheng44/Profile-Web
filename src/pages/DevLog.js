import React from "react";
import "./DevLog.css";

const logs = [
  {
    date: "Sat Mar 16, 2024",
    updates: [
      {
        title: "Apply Tailwind CSS to the project",
        details: [
          "Replace dev log page with Tailwind css",
          "Use Tailwind CSS for further development",
        ],
      },
      {
        title: "Add google login authentication for the web page",
        details: [
          "Add a google login button and login out button according to login state",
          "Add server side authentication procedure",
          "Add user information table in database",
        ],
      },
    ],
  },
  {
    date: "Tue Sep 26, 2023",
    updates: [
      {
        title: "Add Comment Functionality and Other Updates",
        details: [
          "Implemented the feature to add comments to messages.",
          "Developed the back-end logic for processing and storing comments in the database.",
          "Designed a clear and concise format for displaying comments.",
          "Refined the style and layout of the MessageCard to enhance user experience.",
        ],
      },
    ],
  },
  {
    date: "Mon Sep 25, 2023",
    updates: [
      {
        title: "Added server and server-side routing",
        details: [
          "Established a server to handle incoming requests.",
          "Implemented server-side routing for different endpoints.",
          "Set up database connectivity and data storage on the server.",
        ],
      },
      {
        title: "Implemented message submission logic",
        details: [
          "Developed front-end and back-end logic for submitting messages.",
          "Ensured data validation and processing on the server.",
        ],
      },
      {
        title: "Added comment functionality and comment list display",
        details: [
          "Implemented the ability to add comments to messages.",
          "Created a feature to display a list of comments for each message.",
        ],
      },
    ],
  },
  {
    date: "Sat Sep 23, 2023",
    updates: [
      {
        title: "Add message card display page",
        details: [
          "Designed and implemented the message card layout.",
          "Ensured responsive design for various screen sizes.",
          "Integrated message data from the server to display on each card.",
        ],
      },
    ],
  },
  {
    date: "Wed Sep 20, 2023",
    updates: [
      {
        title: "Add draggable personal info card",
        details: [
          "Implemented draggable functionality for personal info card.",
          "Added smooth transition and snap effect to the draggable card.",
          "Ensured that the personal info card is accessible and user-friendly.",
        ],
      },
    ],
  },
  {
    date: "Sun Sep 17, 2023",
    updates: [
      {
        title: "Add avatar and personal info Profile page",
        details: [
          "Created a profile page to display user's avatar and personal information.",
          "Designed a clean and intuitive user interface for the profile page.",
          "Added the option for users to edit and update their personal information.",
        ],
      },
    ],
  },
  {
    date: "Fri Sep 15, 2023",
    updates: [
      {
        title: "Build skeleton of the web app",
        details: [
          "Initialized the project structure and organized the files.",
          "Set up essential dependencies and tools for development.",
          "Drafted an initial design and flow for the web application.",
        ],
      },
    ],
  },
];

const DevLog = () => {
  return (
    <div className="log-container py-10">
      <h1 className="text-3xl font-bold mb-8">Development Log</h1>
      {logs.map((log, index) => (
        <div className="log-day mb-8" key={index}>
          <h3 className="text-2xl font-semibold mb-4">{log.date}</h3>
          {log.updates.map((update, updateIndex) => (
            <div className="mb-6" key={updateIndex}>
              <h4 className="text-xl font-bold mb-3">{update.title}</h4>
              {update.details.map((detail, detailIndex) => (
                <p className="text-base mb-2 pl-4" key={detailIndex}>
                  {`${detailIndex + 1}. ${detail}`}
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DevLog;
