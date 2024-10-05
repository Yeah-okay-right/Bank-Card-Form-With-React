import React, { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import CardDisplay from "../CardDisplay/CardDisplay";
import "./CardForm.css";

function CardForm() {
  let CardNumberRef = useRef(null);
  let Ccv2Ref = useRef(null);
  let ExpirationMonthRef = useRef(null);
  let ExpirationYearRef = useRef(null);

  let [CardNumber, SetCardNumber] = useState("");
  let [Ccv2, SetCcv2] = useState("");
  let [ExpirationMonth, SetExpirationMonth] = useState("");
  let [ExpirationYear, SetExpirationYear] = useState("");

  useEffect(() => {
    CardNumberRef.current.focus();
  }, []);

  let handleCardNumberChange = (e) => {
    let CardNumberData = e.target.value.replace(/\D/g, "");
    SetCardNumber(CardNumberData);
    if (CardNumberData.length === 16) {
      Ccv2Ref.current.focus();
    }
  };

  let handleCcv2Change = (e) => {
    let Ccv2Data = e.target.value.replace(/\D/g, "");
    SetCcv2(Ccv2Data);
    if (Ccv2Data.length === 3) {
      ExpirationYearRef.current.focus();
    }
  };

  let handleExpirationYearChange = (e) => {
    let ExpirationYearData = e.target.value.replace(/\D/g, "");
    SetExpirationYear(ExpirationYearData);
    if (ExpirationYearData.length === 2) {
      ExpirationMonthRef.current.focus();
    }
  };

  let handleExpirationMonthChange = (e) => {
    let ExpirationMonthData = e.target.value.replace(/\D/g, "");
    SetExpirationMonth(ExpirationMonthData);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Successfully");
  };

  return (
    <div className="container flex">
      <form className="form flex" onSubmit={handleSubmit}>
        <div className="cardNumberParrent flex">
          <input
            type="text"
            placeholder="Card Number"
            id="cardNumber"
            ref={CardNumberRef}
            maxLength={16}
            value={CardNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <div className="ccv2Parrent flex">
          <input
            type="text"
            placeholder="CCV2"
            id="ccv2"
            ref={Ccv2Ref}
            maxLength={3}
            value={Ccv2}
            onChange={handleCcv2Change}
          />
        </div>
        <br />
        <div className="expirationDate flex">
          <input
            type="text"
            placeholder="Year"
            id="expirationYear"
            ref={ExpirationYearRef}
            maxLength={2}
            value={ExpirationYear}
            onChange={handleExpirationYearChange}
          />
          <input
            type="text"
            placeholder="Month"
            id="expirationMonth"
            ref={ExpirationMonthRef}
            maxLength={2}
            value={ExpirationMonth}
            onChange={handleExpirationMonthChange}
          />
        </div>
        <br />
        <button className="submit" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <CardDisplay
        cardNumber={CardNumber}
        ccv2={Ccv2}
        expirationYear={ExpirationYear}
        expirationMonth={ExpirationMonth}
      />
      <Toaster />
    </div>
  );
}

export default CardForm;
