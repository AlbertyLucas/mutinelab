import styled from 'styled-components';

export const Avatar = styled.img`
    
    position: absolute;
    top: var(--space);
    left: var(--space);
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    border: 2rem solid var(--color-front-end);
    transform: translatex(calc((100% + var(--space)) * -1));
    opacity: 0;
    transition: transform 200ms linear, opacity 100ms linear;
`;

export const Thumb = styled.img`
    width: 100%;
    `;

export const WrapperThumb = styled.figure`
    /* opacity: 0; */
    border-radius: 4px;
    position: relative;
    border: var(--border    ) solid var(--color-front-end);
    width: 640px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 100ms linear;
    /* background-color: var(--color-front-end); */

    &:hover {
       
        transform: translate(var(--move-space), var(--move-space));
       
        & > ${Avatar} {
            transform: translateX(0);
            opacity: 1;
            transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
        }
    }
`;

export const Background = styled.div`
    --space: 20rem;
    --border: 4rem;
    /* --move-border: calc(var(--border) * -1); */
    --move-space: calc(var(--space) * -1);
    position: relative;
background-color: var(--color-front-end);

    &::before {
        content: ' ';
        position: absolute;
        right: 0;
        top: 0;
        width: var(--space);
        height: var(--space);
        background-color: red;

        transform-origin: right top;
        transition: 100ms linear;
    }

    &:hover {
        &::before {
            transform: rotate(45deg);
        }
    }
`;
