import styled from "styled-components";

export const Button = styled.button`
  border: solid 1px #000426;
  background: #000426;
  color: #ffdad7;
  border-radius: 1px;
  box-shadow: ${(props) => props.borderShadow || "5px 10px #fff2f2"};
  /* margin: 3rem; */
  @media all and (max-width: 1212px) {
    font-size: 10px;
    width: 2.7rem;
  }
`;

export const BtnCont = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15rem;
  margin-bottom: 10rem;
`;
