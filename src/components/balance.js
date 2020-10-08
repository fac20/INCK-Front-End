import React from "react";
import { FormGroup, Input, Label } from "./../styled-components/FormDesign";
import { Button, BtnCont } from "./../styled-components/Button";
import RowDiv from "./../styled-components/RowDiv";
import Img from "./home";
import woman from "./woman.png";

// import { useLocation } from "react-router-dom";

// on submission work form query is broken down and passed into a work array containing the numbers,
// look at oli's workshop for how he parsed the number from the urlsearchparams object
// same for play form

export const Balance = () => {
  const [clickPlay, setClickPlay] = React.useState(false);
  const [clickWork, setClickWork] = React.useState(false);
  // const location = useLocation();

  function collectPlayData(event) {
    event.preventDefault();
    event.target.reset();

    //url
    const url = "https://zenpal.herokuapp.com/post-play";

    //pull out the data from the form
    console.log(event);
    let time = event.target.elements.time.value;
    let dateTime = new Date();
    console.log(time, "date:", dateTime);

    //authenticate will find user ID on backend to link

    const checkResponse = (response) => {
      if (!response.ok) {
        console.error(`Error with the request! ${response.status}`);
        return response.status;
      }
      return response;
    };

    //500 internal server
    function sendPlay(time, dateTime) {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify({ time, dateTime }),
        headers: { "content-type": "application/json" },
      })
        .then(checkResponse)
        .catch((err) => {
          throw new Error("Error with submission of play time");
        });
    }
  }

  return (
    <div className="balance">
      <Img name={woman} class={"balancewoman"} />
      <BtnCont>
        <FormToggleButton click={() => setClickWork(!clickWork)}>
          Work
        </FormToggleButton>
        <FormToggleButton click={() => setClickPlay(!clickPlay)}>
          Play
        </FormToggleButton>
      </BtnCont>
      <RowDiv>
        {clickWork ? (
          <InputForm type="work" submit={(event) => collectPlayData(event)} />
        ) : (
          <></>
        )}

        {clickPlay ? (
          <InputForm type="play" submit={(event) => collectPlayData(event)} />
        ) : (
          <></>
        )}
      </RowDiv>
    </div>
  );
};

// const LotusImage = () => {

// }

const FormToggleButton = (props) => {
  // option to change colours??
  return <Button onClick={props.click}>{props.children}</Button>;
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
