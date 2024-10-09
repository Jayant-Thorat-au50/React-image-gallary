import "./SingleImageDetails.css";
import GetImageById from "../../Hooks/GetImageById";

function SingleImageDetails() {
  const { imageState } = GetImageById();

  return (
    <div className="col-10 m-auto my-5 text-white single-bg py-5 d-flex justify-content-center align-items-center">
      <div className=" col-5 ">
        <img src={imageState.image} alt="" className="single-images " />
      </div>
      <div className="col-7 d-flex justify-content-center align-items-start p-3 flex-column">
        <h2>{imageState.title}</h2>

        <br />
        <p className="h4">{imageState.description}</p>
      </div>
    </div>
  );
}

export default SingleImageDetails;
