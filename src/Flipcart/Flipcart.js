import React from "react";
import "./Flipcart.css";

const Flipcart = () => {
  return (
    <div className="flip">
      <div className="flipItem">
        <h3>4.7 &#9733;</h3>
        <div className="ratingtext">
          <p>1802 Rating &</p>
          <p>750 Reviews</p>
        </div>
      </div>
      <div className="flipItem">
        <div className="lines">
          5 &#9733;
          <div className="progress1">
            <div className="progress-value five"></div>
          </div>
          15000
        </div>
        <div className="lines">
          4 &#9733;
          <div className="progress1">
            <div className="progress-value four"></div>
          </div>
          1500
        </div>
        <div className="lines">
          3 &#9733;
          <div className="progress1">
            <div className="progress-value three"></div>
          </div>
          1000
        </div>
        <div className="lines">
          2 &#9733;
          <div className="progress1">
            <div className="progress-value two"></div>
          </div>
         900
        </div>
        <div className="lines">
          1 &#9733;
          <div className="progress1">
            <div className="progress-value one"></div>
          </div>
          600
        </div>
       
      </div>
      <div className="flipItem1">
        <div className="progress-bar-container">
          <div className="progress-bar battery">
            <progress min="0" max="100" value="92"></progress>
          </div>
          <h4>Battery</h4>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar Camera">
            <progress min="0" max="100" value="87"></progress>
          </div>
          <h2>Camera</h2>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar Display">
            <progress min="0" max="100" value="73"></progress>
          </div>
          <h2>Display</h2>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar Design">
            <progress min="0" max="100" value="80"></progress>
          </div>
          <h4>Design</h4>
        </div>
      </div>
    </div>
  );
};

export default Flipcart;
