import React from "react";
import "./CardDisplay.css";

function CardDisplay({ cardNumber, ccv2, expirationMonth, expirationYear }) {
  return (
    <div className="card flex">
      <div className="cardName">
        <h1>Your Card</h1>
      </div>
      <div className="cardNumber">
        <h2 className="cardNumberText">
          {cardNumber ? cardNumber.match(/.{1,4}/g).join(" ") : ""}
        </h2>
      </div>
      <div className="bottonSection flex">
        <div className="ccv2 flex">
          <pre>ccv2: </pre>
          <h3 className="ccv2Text">{ccv2}</h3>
        </div>
        <div className="expirationDate flex">
          <pre>expiration: </pre>
          <h3 className="expirationMonthText">{expirationMonth}</h3>/
          <h3 className="expirationYearText">{expirationYear}</h3>
        </div>
      </div>
    </div>
  );
}

export default CardDisplay;
