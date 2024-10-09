import React from "react";
import "./ImgTobeListed.css";
import { Link } from "react-router-dom";

function ImgTobeListed({ url, id }) {
  return (
    <div className=" d-flex col-lg-3 col-md-4 col-10 my-2   justify-content-center align-items-center">
      <Link to={`/image/${id}`}>
        <img src={url} alt="img" />
      </Link>
    </div>
  );
}

export default ImgTobeListed;
