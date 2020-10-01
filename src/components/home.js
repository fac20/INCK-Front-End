import React from "react";
import woman from "./woman.png";
import Floatdiv from "./../styled-components/Floatdiv";
import Animate from "./../styled-components/Animation";
import Testimonial from "./../styled-components/Testimonial";
import Testimony from "./testimony";
import head1 from "./head1.svg";
import head2 from "./head2.svg";
//INCK-Front-End/public/images/head1.svg

export function Home() {
  return (
    <div>
      <section className="homemain">
        <Floatdiv>
          <Animate>
            <Img name={woman} class={"womanfloat"} />
          </Animate>
        </Floatdiv>
        <div className="test">
          <Testimonial>
            <Testimony>
              Zenpal changed my life!!!
              <Img name={head1} class={"head1"} />
            </Testimony>
          </Testimonial>
          <Testimonial>
            <Testimony>
              I never knew i needed it until i found it !!!
              <Img name={head2} class={"head2"} />
            </Testimony>
          </Testimonial>
          <Testimonial>
            <Testimony>
              I never knew i needed it until i found it !!!
              <Img name={head2} class={"head2"} />
            </Testimony>
          </Testimonial>
          <Testimonial>
            <Testimony>
              I never knew i needed it until i found it !!!
              <Img name={head2} class={"head2"} />
            </Testimony>
          </Testimonial>
        </div>
      </section>
    </div>
  );
}
//move and create a file for it in components so things are modularised.
export default function Img(props) {
  return (
    <>
      <img src={props.name} alt="woman floating" className={props.class} />
    </>
  );
}

