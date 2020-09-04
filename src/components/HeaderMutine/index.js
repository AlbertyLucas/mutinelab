import styled from 'styled-components';
import ButtonMutine from '../ButtonMutine';
import LogoMutine from '../LogoMutine';
import container from '../../Tools/container';

export const HeaderMutine = styled.header`
    padding: 20rem 0;
    background-color: var( --color-black-dark);
    border-bottom: 4px solid var(--color-primary-medium);
    
    @media(max-width: 800px) {
        padding: 15rem 16rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${container};

    @media(max-width: 800px) {
        justify-content: center;

        & > ${LogoMutine} {
            height: 35px;
        }

        & > ${ButtonMutine} {
            background-color: var(--color-primary-medium);
            border-radius: 0;
            border: 0;

            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
        }
    }
   
`

