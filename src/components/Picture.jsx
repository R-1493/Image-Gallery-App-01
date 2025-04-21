import React from "react";
const Picture = ({ photographer, large }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img
          className="picture"
          src={large}
          alt={photographer}
          style={{ width: "100%", height: "auto" }}
        />{" "}
      </div>
      <p className="info">{photographer}</p>
    </div>
  );
};
export default Picture;
