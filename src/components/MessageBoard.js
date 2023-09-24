import React from "react";
import MessageCard from "./MessageCard";
import { Responsive, WidthProvider } from "react-grid-layout";

import "./MessageBoard.css";

const MessageBoard = () => {

    const ResponsiveGridLayout  = WidthProvider(Responsive);

    let date = new Date('September 23, 2023 10:00:00');
    const defaultMessage = [
        { _id:1, author: "xiaoheng", message:"Welcome to GuestBoard, You can leave any messages you like.", date:date},
        { _id:2, author: "Hu", message:"Welcome to GuestBoard, You can leave any messages you like.", date:date},
        { _id:3, author: "heng", message:"Welcome to GuestBoard, I love dancing.", date:date},
        { _id:4, author: "xiao", message:"What a lovely day", date:date},
    ];

    const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

    const genLayouts = {
        lg: generatedLayout(defaultMessage, cols.lg),
        md: generatedLayout(defaultMessage, cols.md),
        sm: generatedLayout(defaultMessage, cols.sm),
        xs: generatedLayout(defaultMessage, cols.xs),
        xxs: generatedLayout(defaultMessage, cols.xxs),
    };


    console.log(genLayouts);

    return (
        <ResponsiveGridLayout
        className="messageBoard"
        layouts={genLayouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={cols}
        rowHeight={100}>
            {defaultMessage.map((message,index) => (
                <div key={index} className="messageCard-container">
                    <MessageCard _id={message._id} message={message.message} author={message.author} date={message.date}/>
                </div>
            ))}
        </ResponsiveGridLayout >
    );
};

function generatedLayout(defaultMessage, col_num){
    return defaultMessage.map((message,index) => {
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