import React, { useState } from "react";

import ImgTobeListed from "../ImageToBeListed/ImgTobeListed";
import Paginations from "../paginations/Paginations";
import UseImageList from "../../Hooks/UseImageList";

function ImagesList() {
  const { imageListState, setImageListState } = UseImageList();

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
          disabled={imageListState.offset == 0}
          onclick={() =>
            setImageListState({
              ...imageListState,
              offset: imageListState.offset - 20,
            })
          }
        />
        <Paginations
          navtype="Next"
          disabled={imageListState.offset >= 213}
          onclick={() =>
            setImageListState({
              ...imageListState,
              offset: imageListState.offset + 20,
            })
          }
        />
      </div>
    </div>
  );
}

export default ImagesList;
