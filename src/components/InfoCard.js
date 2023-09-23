import React from "react";
import "./InfoCard.css"

const InfoCard = (props) => {
    return(
        <div className="info-card">
            <div className="info-card-key">
                {props.field}
            </div>
            <div className="info-card-value">
                {props.value}
            </div>
        </div>
    );
};



export default InfoCard;