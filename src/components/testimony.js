import React from "react";
import { LandingP } from "./../styled-components/Paragraph"

export default function Testimony(props) {
  return (
    <div className={props.class}>
      <div className="inner-box">
        <LandingP>{props.children}</LandingP>
      </div>
    </div>
  );
}
