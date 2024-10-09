import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function GetImageById() {
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

  return {
    imageState,
  };
}

export default GetImageById;
