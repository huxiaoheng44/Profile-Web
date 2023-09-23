import React from "react";
import "./InfoCard.css"

/**
 * InfoCard is a presentation component that displays key-value pairs in a card format.
 *
 * @param {string} field represents the key or attribute name
 * @param {string} value represents the corresponding value or attribute content
 */

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