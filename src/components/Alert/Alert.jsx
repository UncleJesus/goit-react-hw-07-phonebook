import React from "react";

const Alert = (props) => {
  return (
    <div>
      <h2 className="title">This contact is already exist!</h2>
      <button onClick={props.ok} className="btn">
        OK
      </button>
    </div>
  );
};

export default Alert;
