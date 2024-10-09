import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ImgTobeListed from "../ImageToBeListed/ImgTobeListed";
import Paginations from "../paginations/Paginations";

function ImagesList() {
  const [imageListState, setImageListState] = useState({
    imageListUrl:
      "https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=20",
    imagesDeatilsList: [],
    offset:0,
    limit: 20,
    name: "",
  });

  async function ImgaeDownload() {
    const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=${imageListState.offset}&limit=${imageListState.limit}`);
    


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

    setImageListState((state)=>({
      ...state,
      imagesDeatilsList: imgDetails,
    }))
  }

  useEffect(() => {
    ImgaeDownload();
  },[imageListState.offset]);

  return (
    <div className="col-12  d-flex flex-column gap-4 ">
  <div className="d-flex flex-wrap ">
  {imageListState.imagesDeatilsList.map((ele) => (
        <ImgTobeListed
          url={ele.image}
          id={ele.id}
          key={ele.id}
          title={ele.title}
          description={ele.description}
        />
      ))}
  </div>

<div className="paginations d-flex justify-content-center align-items-center ">
            <Paginations
              navtype="Prev"
              disabled={imageListState.offset==0}
              onclick={()=> setImageListState({
                ...imageListState,
                offset:imageListState.offset - 20,
                
              })
            
              
            }
              
              
            />
            <Paginations
              navtype="Next"
              disabled={imageListState.offset>=213}
              onclick={()=> setImageListState({
                ...imageListState,
                offset:imageListState.offset + 20,
                
              })
            
              
            }

            />
          </div>
    </div>
  );
}

export default ImagesList;
