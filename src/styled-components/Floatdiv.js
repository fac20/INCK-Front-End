import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  width: 50rem;
  background: #000426;
  top: 12rem;
  left: 0;
  margin: 0rem 0rem 0rem 0rem;
  @media all and (max-width: 1000px) {
    position: static;
    width: 362px;
  }
  @media all and (max-width: 424px) {
    position: static;
    width: 100vw;
  }

`;
