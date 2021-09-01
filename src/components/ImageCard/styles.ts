import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import ImageCardProps from "../../types/ImageCardProps";

export const Container = styled.div<ImageCardProps>`
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

export const Title = styled.h2`
  font-weight: 500;
  margin: -.92rem auto .4rem;
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  margin: .24rem;
  color: ${palletCollors.black2};
`;

export const Content = styled.p`
  color: ${palletCollors.black3};
  text-align: center;
  width: 92%;
  font-size: 0.88rem;
  font-weight: 400;
  word-wrap: break-word;
  text-overflow: hidden;
`;


export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: .24rem;
`;

export const ImgContainer = styled.div<ImageCardProps>`
  width: 100%;
  height: 224px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
