import React from "react";
import { BsHeartFill } from "react-icons/bs";

function CardMain({ imgSrc, title, hearts }) {
  return (
    <div className="card_main">
      <img src={imgSrc} alt="" />

      <div className="card_main_name">
        <h2>{title}</h2>

        <div className="card_icon">
          <i>
            {" "}
            <BsHeartFill /> <span>{hearts}</span>{" "}
          </i>
        </div>
      </div>

      <div className="stats">
        <p>
          Current Bid <span>1.2 ETH</span>
        </p>
        <p>
          Ending In <span>1d:12h:12m</span>
        </p>
      </div>

      <div className="card_btn">
        <a href="#" className="btn1 btn">
          Place a Bid
        </a>
        <a href="#" className="btn2 btn">
          History
        </a>
      </div>
    </div>
  );
}

export default CardMain;
