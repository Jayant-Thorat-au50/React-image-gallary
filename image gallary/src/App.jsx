import "./App.css";
import ImagesList from "../Components/ImagesList/ImagesList";
import { Routes, Route } from "react-router-dom";
import SingleImageDetails from "../Components/SingleImageDetails/SingleImageDetails";

function App() {
  return (
    <>
      <section className="container-fluid">
        <section className="row ">
          <section className="col-12 d-flex justify-content-center align-items-center">
            <Routes>
              <Route path="/" element={<ImagesList />}></Route>
              <Route path="/image/:id" element={<SingleImageDetails />}></Route>
            </Routes>
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
