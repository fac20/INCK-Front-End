import React from "react";

export default function Testimony(props) {
  return (
    <div className={props.class}>
      <div className="inner-box">
        <p>{props.children}</p>
      </div>
    </div>
  );
}
