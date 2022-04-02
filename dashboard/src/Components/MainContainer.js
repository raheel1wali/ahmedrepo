import React from "react";
import "./MainContainer.css";
import Banner from "../img/1.jpg";
import CardMain from "./CardMain";
import card1 from "../img/card1.jpg";
import card2 from "../img/card2.jpg";
import card3 from "../img/card3.jpg";
import card4 from "../img/card4.jpg";
import card5 from "../img/card5.jpg";
import card6 from "../img/card6.jpg";

function MainContainer() {
  return (
    <div className="mainContainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded By Alexander Vernof</p>
            <div className="bid">
              <a href="#" className="btn1">
                Bid Now
              </a>
              <p>
                Ending In <span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="btn2">
                Popular
              </a>
            </div>
            <div className="filter_btns">
              <a href="#" className="btn1">
                All
              </a>
              <a href="#" className="btn2">
                Illustration
              </a>
              <a href="#" className="btn2">
                Art
              </a>
              <a href="#" className="btn2">
                Games
              </a>
            </div>
          </div>

          <main>
              <CardMain imgSrc={card1} title={"Cubic Thunder"} hearts={"65"} />
          </main>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default MainContainer;
