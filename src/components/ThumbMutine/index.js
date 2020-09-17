import React from 'react';
import AvatarMutine from '../AvatarMutine';
import { WrapperThumb, Thumb, Avatar, Background, Channel, Title } from './style';

function ThumbMutine({ src, alt, avatar, channelName, title }) {
    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarMutine photo={avatar} channelName={channelName} />
                <Title>{title}</Title>
            </WrapperThumb>
        </Background>
    );
}

export default ThumbMutine;