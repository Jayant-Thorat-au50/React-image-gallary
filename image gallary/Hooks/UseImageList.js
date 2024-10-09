import { useState, useEffect } from "react";
import axios from "axios";

function UseImageList() {
  const [imageListState, setImageListState] = useState({
    imageListUrl:
      "https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=20",
    imagesDeatilsList: [],
    offset: 0,
    limit: 20,
    name: "",
  });

  async function ImgaeDownload() {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos?offset=${imageListState.offset}&limit=${imageListState.limit}`
    );

    console.log(response);

    const list = response.data.photos;

    const imgDetails = list.map((ele) => {
      return {
        image: ele.url,
        id: ele.id,
        title: ele.title,
        description: ele.description,
      };
    });

    setImageListState((state) => ({
      ...state,
      imagesDeatilsList: imgDetails,
    }));
  }

  useEffect(() => {
    ImgaeDownload();
  }, [imageListState.offset]);

  return {
    imageListState,
    setImageListState,
  };
}

export default UseImageList;
