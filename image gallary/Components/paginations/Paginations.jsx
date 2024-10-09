import React from "react";

function Paginations({ navtype, onclick, disabled }) {
  return (
    <>
      <button
        className="btn bg-light text-danger fw-bold border border-danger m-1"
        onClick={onclick}
        disabled={disabled}
      >
        {navtype}
      </button>
    </>
  );
}

export default Paginations;
