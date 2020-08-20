import styled from 'styled-components';
import ButtonMutine from '../ButtonMutine';
import LogoMutine from '../LogoMutine';

const HeaderMutine = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20rem 30rem;
    background-color: var( --color-black-dark);
    border-bottom: 4px solid var(--color-primary-medium);

    @media(max-width: 800px) {
        justify-content: center;
        padding: 15px 16px;

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
`;

export default HeaderMutine;