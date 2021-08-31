import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 132px;
  width: 100vw;
  background: ${palletCollors.white};
  padding: 1.6rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 880px;
  height: 100%;
`;

export const Img = styled.img`
  width: 120px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 1.6rem;
`;

