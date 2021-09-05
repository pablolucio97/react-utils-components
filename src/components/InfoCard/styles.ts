import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import InfoCardProps from "../../types/InfoCardProps";

export const Container = styled.div<InfoCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${(props) =>
    props.size === "small"
      ? "240px"
      : props.size === "medium"
      ? "320px"
      : "400px"};
  height: ${(props) =>
    props.size === "small"
      ? "320px"
      : props.size === "medium"
      ? "400px "
      : "400px"};
  padding: 0.8rem;
  margin: 1.6rem;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
  text-overflow: ellipsis;
  background: ${(props) => props.style?.background || palletCollors.white};
  border-radius: ${(props) => props.style?.borderRadius || "4px"};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: ${(props) => (props.animationOnHover ? "scale(1.024)" : "none")};
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  margin: 0.24rem;
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  margin:  0.24rem;
  font-size: .92rem;
  color: ${palletCollors.black3};
`;

export const Content = styled.p`
  color: ${palletCollors.darkGray2};
  text-align: center;
  width: 92%;
  font-size: 0.88rem;
  font-weight: 400;
 word-break: break-word;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: .4rem;
  border-bottom: 1px solid ${palletCollors.lightGray3};
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: .4rem;
`;
