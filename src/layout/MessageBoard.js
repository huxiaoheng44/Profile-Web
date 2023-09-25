import React from "react";
import MessageCard from "../components/MessageCard";
import { Responsive, WidthProvider } from "react-grid-layout";

import "./MessageBoard.css";

const MessageBoard = (props) => {

    const ResponsiveGridLayout  = WidthProvider(Responsive);

    const messages = props.messages


    // let date = new Date('September 23, 2023 10:00:00');
    // const defaultMessage = [
    //     { _id:1, author: "xiaoheng", message:"Welcome to GuestBoard, You can leave any messages you like.", date:date},
    //     { _id:2, author: "Hu", message:"Welcome to GuestBoard, You can leave any messages you like.", date:date},
    //     { _id:3, author: "heng", message:"Welcome to GuestBoard, I love dancing.", date:date},
    //     { _id:4, author: "xiao", message:"What a lovely day", date:date},
    // ];

    const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

    const genLayouts = {
        lg: generatedLayout(messages, cols.lg),
        md: generatedLayout(messages, cols.md),
        sm: generatedLayout(messages, cols.sm),
        xs: generatedLayout(messages, cols.xs),
        xxs: generatedLayout(messages, cols.xxs),
    };


    // console.log(genLayouts);

    return (
        <ResponsiveGridLayout
        className="messageBoard"
        layouts={genLayouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={cols}
        rowHeight={100}>
            {/* {defaultMessage.map((message,index) => (
                <div key={index} className="messageCard-container">
                    <MessageCard _id={message._id} message={message.message} author={message.author} date={message.date}/>
                </div>
            ))} */}
            {
                messages.length > 0 ? (
                    messages.map((message, index) => (
                    <div key={index} className="messageCard-container">
                        <MessageCard _id={message._id} message={message.content} 
                        author={message.author} date={message.date} />
                    </div>
                    ))
                ) : (
                    <p>No message yet, please type your first message here!</p>
                )
            }
        </ResponsiveGridLayout >
    );
};

function generatedLayout(messages, col_num){
    return messages.map((message,index) => {
        return {
            x: (index * 4) % col_num,
            y: Math.floor((index * 4) / col_num),
            w: 4,
            h: 4,
            i: index.toString(),
            resizable: true,
        }
    })
}

export default MessageBoard;