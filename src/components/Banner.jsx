import React from "react";
import "../Banner.css";
import "../index.css";
import "../App.css";


export default function Banner() {
  return (
    <div className="container-banner">
      <div className="sale">
        <p>Get 20% OFF When You Book A Spa Day For Your Animal Today!</p>
      </div>
      <div className="booking-block">
        <div className="info">
          <p>Your dog running amok in the dirt?</p>
          <div className="sub-info">
            <p>Book your doggy spa day!</p>
          </div>
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  );
}
