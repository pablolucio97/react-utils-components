import styled from "styled-components";
import InfoCardProps from "../../types/InfoCardProps";

export const Container = styled.div<InfoCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 240px;
  height: 320px;
  padding: 0.8rem;
  margin: 0.4rem;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
  text-overflow: ellipsis;
  background: ${(props) => props.style?.background || "#fff"};
  border-radius: ${(props) => props.style?.borderRadius || "4px"};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: ${(props) => (props.animationOnHover ? "scale(1.024)" : "none")};
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  margin: 0.4rem;
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  margin: 1rem;
  color: #333;
`;

export const Content = styled.p`
  color: #444;
  text-align: justify;
  width: 92%;
  font-size: 0.88rem;
  font-weight: 400;
  word-wrap: break-word;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0.4rem;
  text-align: start;
`;
