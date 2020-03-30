import React from "react";

const SpinnerPage = (props) => {
  return (
    <>
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

export default SpinnerPage;