import React from 'react';
import AvatarMutine from '../AvatarMutine';
import { WrapperThumb, Thumb, Background, Title, Timer } from './style';

function ThumbMutine({ src, alt, avatar, channelName, title, timer }) {
    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarMutine photo={avatar} channelName={channelName} />
                <Title>{title}</Title>
                <Timer>{timer}</Timer>
            </WrapperThumb>
        </Background>
    );
}

export default ThumbMutine;