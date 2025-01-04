import React from "react";

const Hours = (props) => {
  return (
    <>
      <div>
        <span>
          {props.day}: {props.hours}
        </span>
      </div>
    </>
  );
};

export default Hours;
