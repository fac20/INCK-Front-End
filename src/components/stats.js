import React from "react";
import { PieChart } from "react-minimal-pie-chart";

export function Stats(props) {
  return (
    <>
      <section className="statsmain">
        <h1>Here are your current statistics for work and play!</h1>
        <h2>Work: {props.work}%</h2>
        <h2>Play: {props.play}%</h2>
        <PieChart
          data={[
            { title: "work", value: props.work, color: "#E38627" },
            { title: "play", value: props.play, color: "#C13C37" },
          ]}
        />
        ;
      </section>
    </>
  );
}

//cool data viz of work vs play

// stats could have the work variable and play variable as props from the balance page
//display each variable as a bar?
