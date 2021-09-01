import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import SectionProps from "../../types/SectionProps";

export const SectionContainer = styled.section<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  min-height: 88vh;
  background: ${(props) =>
    props.sectionStyle?.background
      ? props.sectionStyle?.background
      : palletCollors.primary};
  padding: 2.4rem 1.2rem 4.8rem;
`;

export const TitleContainer = styled.div`
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.4rem;
`;

export const ContentContainer = styled.div<SectionProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.contentOrientation === "vertical" ? "column" : "row"};
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1160px;
`;
