import React from "react";
import {
  ProfileCont,
  ProfileImg,
  ProfileUserName,
} from "./../styled-components/Profile";
import user from "./../components/user.svg";

export default function Profile() {
  return (
    <ProfileCont>
      <ProfileImg src={user} alt="" />
      <ProfileUserName>
        <h1>User: SantaBaby2007</h1>
      </ProfileUserName>
      <ProfileUserName>
        <h1>STATS</h1>
      </ProfileUserName>
      <ProfileUserName>
        <h1>Streak : 8 days</h1>
      </ProfileUserName>
    </ProfileCont>
  );
}
