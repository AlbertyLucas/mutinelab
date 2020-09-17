import styled from 'styled-components';

export const Channel = styled.figcaption`
    font-size: 20rem;
    color: var(--color-gray-ligth);
    text-shadow: 2px 2px 2px var(--color-gamedec);
    font-weight: bold;
`;

export const Avatar = styled.img`
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    border: 2rem solid var(--color-gamedec);
    margin-right: 10rem;    
`;

export const WrapperAvatar = styled.figure`
    display: flex;
    align-items: center;
`;