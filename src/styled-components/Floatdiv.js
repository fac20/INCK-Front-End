import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 40rem;
  background: #000426;
  height: 95vh;
  top: 12rem;
  left: 0;
  margin: 0rem 0rem 0rem 0rem;
  @media all and (max-width: 1212px) {
    position: static;
    width: 500px;
  }
`;
