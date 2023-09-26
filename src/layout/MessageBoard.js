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

    const cols = { lg: 12, md: 9, sm: 6, xs: 4, xxs: 2 };

    const genLayouts = {
        lg: generatedLayout(messages, cols.lg),
        md: generatedLayout(messages, cols.md),
        sm: generatedLayout(messages, cols.sm),
        xs: generatedLayout(messages, cols.xs),
        xxs: generatedLayout(messages, cols.xxs),
    };

    const margin = {
        lg: [30, 30],
        md: [20, 20],
        sm: [15, 15],
        xs: [10, 10],
        xxs: [10, 10],
    }

    // console.log(genLayouts);

    console.log(messages);
    return (
        <div className="messageBoard-container">
            <ResponsiveGridLayout
            className="gridlayout"
            layouts={genLayouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={cols}
            margin={margin}
            rowHeight={100}>
                {
                    messages.length > 0 ? (
                        messages.map((message, index) => (  
                        <div key={index} className="messageCard-container">
                            <MessageCard 
                            messageId={message.messageId} 
                            content={message.content} 
                            author={message.author} 
                            date={message.date} />
                        </div>
                        ))
                    ) : (
                        <p>No message yet, please type your first message here!</p>
                    )
                }
            </ResponsiveGridLayout >
        </div>
    );
};

function generatedLayout(messages, col_num){
    let setH = 4;
    let setW = 4;

    if(col_num === 12) {
        setH = 4;
        setW = 4;
    } else if(col_num === 9) {
        setH = 3;
        setW = 4;
    } else if(col_num === 6) {
        setH = 3;
        setW = 4;
    } else if(col_num === 4) {
        setH = 4;
        setW = 4;
    } else if(col_num === 3) {
        setH = 3;
        setW = 4;
    }

    return messages.map((message,index) => {
        return {
            x: (index * setH) % col_num,
            y: Math.floor((index * setW) / col_num),
            w: setH,
            h: setW,
            i: index.toString(),
            resizable: {x: false, y: true}, 
            resizeHandles: ['s'],
        }
    })
}

export default MessageBoard;