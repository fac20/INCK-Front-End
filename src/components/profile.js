import React from "react";
import {
  ProfileCont,
  ProfileContRow,
  ProfileImg,
  ProfileUserName,
} from "./../styled-components/Profile";
import user from "./../components/user.svg";

export default function Profile() {
  return (
    <ProfileContRow>
      <ProfileImg src={user} alt="" />
      <ProfileCont>
        <ProfileUserName>
          <h1>User: SantaBaby2007</h1>
        </ProfileUserName>
        <ProfileUserName>
          <h1>Update Username</h1>
        </ProfileUserName>
        <ProfileUserName>
          <h1>Update Password</h1>
        </ProfileUserName>
      </ProfileCont>
    </ProfileContRow>
  );
}
