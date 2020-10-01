import styled from "styled-components";
import container from "../../Tools/container";
import TagMutine from "../TagMutine";
import TitleMutine from "../TitleMutine";

export const Text = styled.div`
  padding-top: 10rem;
  max-width: 45%;
  ${TagMutine} {
    margin-bottom: 40rem;
  }

  ${TitleMutine} {
    margin-bottom: 20rem;
  }
`;

export const BannerMutine = styled.section`
  ${container};

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70vh;
  height: 100vh;
`;
