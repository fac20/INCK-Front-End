import React from "react";
import woman from "./woman.png";
import Floatdiv from "./../styled-components/Floatdiv";
import Animate from "./../styled-components/Animation";
import Testimonial from "./../styled-components/Testimonial";
import Testimony from "./testimony";
import head1 from "./head1.svg";
import head2 from "./head2.svg";
import malehead1 from "./malehead1.svg";
import malehead2 from "./malehead2.svg";

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
              ZenPal changed my life!!!
              <Img name={head1} class={"head1"} />
            </Testimony>
          </Testimonial>
          <Testimonial>
            <Testimony>
              I never knew I needed it until I found it !!!
              <Img name={malehead1} class={"head2"} />
            </Testimony>
          </Testimonial>
          <Testimonial>
            <Testimony>
              Covid really rocked my life but ZenPal helped me get it all back
              on track.
              <Img name={head2} class={"head2"} />
            </Testimony>
          </Testimonial>
          <Testimonial>
            <Testimony>
              I was so shocked with how much more I worked remotely! Zenpal was
              a great way to balance myself out again.
              <Img name={malehead2} class={"head2"} />
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
