import React from "react";

const Card = (props) => {
  return (
    <div
      className="border mb-5 p-4 rounded-lg
    bg-primary text-white
    "
    >
      {props.title}
      <p className="mb-0 mt-2">{props.subtitle}</p>
    </div>
  );
};

export default Card;
