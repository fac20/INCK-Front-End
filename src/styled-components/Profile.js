import styled from "styled-components";

export const ProfileCont = styled.div`
  width: 100%;
  /* border: solid black 3px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProfileImg = styled.img`
  width: 21rem;
  height: 20rem;
  margin: 1rem;
`;

export const ProfileUserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: #090426 solid 3px;
  box-shadow: 9px 9px #090426;
  width: 30rem;
  height: 10rem;
  margin-top: 3rem;
`;
