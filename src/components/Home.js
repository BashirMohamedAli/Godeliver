import React from "react";
import img from "./img/img.png";
function Home() {
  return (
    <div className="section">
      <div className="col1">
        <p>
          Rated <span>#1</span> in Customer Satisfaction
        </p>
        <h1>
          Get your things <br /> delivered quickly <br /> & smartly
        </h1>
        <button>GET STARTED</button>
      </div>
      <div className="col2">
        <img src={img} />
      </div>
    </div>
  );
}

export default Home;
