import React from 'react';
import { Avatar, WrapperAvatar, Channel } from './style';

function AvatarMutine({ photo, channelName }) {
    return (
        <WrapperAvatar>
            <Avatar src={photo} alt={channelName} />
            <Channel>{channelName}</Channel>
        </WrapperAvatar>
    )
}

export default AvatarMutine;