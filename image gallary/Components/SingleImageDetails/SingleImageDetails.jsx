import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleImageDetails.css";

function SingleImageDetails() {
  const { id } = useParams();
  const [imageState, setImageState] = useState({
    image: "",
    id: "",
    description: "",
    title: "",
  });

  const dowloadImgById = async () => {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );

    const Details = response.data.photo;

    return setImageState({
      ...imageState,
      image: Details.url,
      id: Details.id,
      description: Details.description,
      title: Details.title,
    });
  };

  useEffect(() => {
    dowloadImgById();
  });

  return (
    <div className="col-10 m-auto my-5 text-white single-bg py-5 d-flex">
      <div className=" col-6 ">
        <img src={imageState.image} alt="" className="single-images " />
      </div>
      <div className="col-6 p-4">
        <h2>{imageState.title}</h2>
        <br />
        <p className="h4">{imageState.description}</p>
      </div>
    </div>
  );
}

export default SingleImageDetails;
