import React from 'react';
import { WrapperThumb, Thumb, Avatar } from './style';

function ThumbMutine({ src, alt, avatar, channelName }) {
    return (
        <WrapperThumb>
            <Thumb src={src} alt={alt} />
            <Avatar src={avatar} alt={channelName} />
        </WrapperThumb>
    );
}

export default ThumbMutine;