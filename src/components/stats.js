import React from "react";

export function Stats(props) {
  return (
    <>
      <section className="statsmain">
        <h1>Here are your current statistics for work and play!</h1>
        <h2>Work: {props.work}%</h2>
        <h2>Play: {props.play}%</h2>
      </section>
    </>
  );
}

//cool data viz of work vs play

// stats could have the work variable and play variable as props from the balance page
//display each variable as a bar?
