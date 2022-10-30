import React, { useEffect, useState } from "react";
import ActionAreaCard from "./ActionAreaCard";
import Menu from "./Menu";
import { getPhotos } from "../services/apiService";
import swal from "sweetalert";
import { Link } from "react-router-dom";
const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getPhotos()
      .then((items) => {
        setPhotos(items.data.slice(0, 16));
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: "Error retrieving images",
          icon: "error",
        });
      });
  }, []);
  console.log(photos);
  return (
    <>
      <Menu />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "25px",
          justifyContent: "space-between",
          rowGap: "10px",
          marginLeft: "10px",
        }}
      >
        {photos.length > 0 &&
          photos.map((item) => (
            <Link path="/card" style={{ textDecoration: "none" }}>
              <ActionAreaCard {...item} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Photos;
