import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1040px;
  background: ${palletCollors.white};
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
  background: ${(props) => props.style?.background || palletCollors.white};
  border-radius: ${(props) => props.style?.borderRadius || "4px"};
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Question = styled.h3`
  font-weight: 500;
  margin: 0.4rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: .8rem;
`;

export const OptionCheck = styled.input`
  color: ${palletCollors.darkGray3};
`

export const OptionLabel = styled.label`
  font-weight: 400;
  color: ${palletCollors.darkGray2};
  margin: -.48rem .48rem;
`

export const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
`;