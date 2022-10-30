import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link to="/Comment" style={{ textDecoration: "none", margin: "10px" }}>
        Comments
      </Link>
      <Link to="/photos" style={{ textDecoration: "none", margin: "10px" }}>
        Photos
      </Link>
    </div>
  );
};

export default Menu;
