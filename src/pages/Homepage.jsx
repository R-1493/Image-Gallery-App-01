import React from "react";
import data from "../helper/data";
import Picture from "../components/Picture";
import "../styles/style.css";

const Homepage = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="pictures">
        {data.map((item, index) => (
          <Picture
            key={index}
            photographer={item.photographer}
            large={item.src.large}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
