import React from 'react';
import AvatarMutine from '../AvatarMutine';
import { WrapperThumb, Thumb, Avatar, Background, Channel } from './style';

function ThumbMutine({ src, alt, avatar, channelName }) {
    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarMutine photo={avatar} channelName={channelName} />
            </WrapperThumb>
        </Background>
    );
}

export default ThumbMutine;