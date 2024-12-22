import Avatar from "../components/Avatar/Avatar";
import React from "react";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

export const Avatars = () => (
  <>
    <Avatar src="avatar.svg" alt="User Name" size="small" shape="circle" />{" "}
    <br />
    <Avatar
      fallbackText="JD"
      size="small"
      bgColor="#eeeeee"
      shape="square"
    />{" "}
    <br />
    <Avatar size="small" fallbackText="A" /> <br />
  </>
);
