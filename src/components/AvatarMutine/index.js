import React from "react";
import PropType from "prop-types";
import { Avatar, WrapperAvatar, Channel } from "./style";

function AvatarMutine({ photo, channelName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={channelName} />
      <Channel>{channelName}</Channel>
    </WrapperAvatar>
  );
}

AvatarMutine.propType = {
  photo: PropType.string.isRequire,
  channelName: PropType.string.isRequired,
}

export default AvatarMutine;
