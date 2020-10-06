import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Fade } from "./../styled-components/Fade";

export function Stats(props) {
  return (
    <>
      <section className="statsmain">
        <Fade>
          <h1>Here are your current statistics for work and play!</h1>
          <h2>Work: {props.work}%</h2>
          <h2>Play: {props.play}%</h2>
        </Fade>
        <section className="chartcontainer">
          <PieChart
            className="piechart"
            radius={50}
            data={[
              { title: "work", value: parseInt(props.work), color: "#190C66" },
              { title: "play", value: parseInt(props.play), color: "#FFFFFF" },
            ]}
          />
        </section>
      </section>
    </>
  );
}

//cool data viz of work vs play

// stats could have the work variable and play variable as props from the balance page
//display each variable as a bar?
