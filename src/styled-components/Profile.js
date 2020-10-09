import styled from "styled-components";

export const ProfileCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
`;
export const ProfileContRow = styled.div`
  border: solid black 3px;
  width: 100%;
  /* border: solid black 3px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ProfileImg = styled.img`
  width: 35rem;
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
  width: 25rem;
  height: 7rem;
  margin-top: 3rem;
`;
