import React from "react";
import { FormGroup, Input, Label } from "./../styled-components/FormDesign";

// import { useLocation } from "react-router-dom";

// on submission work form query is broken down and passed into a work array containing the numbers,
// look at oli's workshop for how he parsed the number from the urlsearchparams object
// same for play form

export const Balance = () => {
  const [clickPlay, setClickPlay] = React.useState(false);
  const [clickWork, setClickWork] = React.useState(false);
  // const location = useLocation();
  function collectData(event) {
    event.preventDefault();
    let query = event.target.elements.time.value;
    localStorage.setItem("time", query);
    // event.reset();
    // let searchParams = new URLSearchParams(location.search)
    // console.log(searchParams);
    // const query = searchParams.get("time");
    console.log(query);
  }

  return (
    <div className="balance">
      <FormToggleButton click={() => setClickWork(!clickWork)}>
        Work
      </FormToggleButton>
      <FormToggleButton click={() => setClickPlay(!clickPlay)}>
        Play
      </FormToggleButton>
      {clickWork ? (
        <InputForm type="work" submit={(event) => collectData(event)} />
      ) : (
        <></>
      )}

      {clickPlay ? <InputForm type="play" /> : <></>}
    </div>
  );
};

// const LotusImage = () => {

// }

const FormToggleButton = (props) => {
  // option to change colours??
  return <button onClick={props.click}>{props.children}</button>;
};

const InputForm = (props) => {
  return (
    <FormGroup onSubmit={props.submit}>
      <Label htmlFor="time">
        {" "}
        How long did you spend on {props.type}?
        <Input
          placeholdertextcolour="red"
          id="time"
          name="time"
          type="number"
          min="0"
          placeholder="Enter time in mins"
          step="5"
        />
      </Label>
      <input type="submit" />
    </FormGroup>
  );
};
