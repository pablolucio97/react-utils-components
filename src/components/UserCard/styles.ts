import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import UserCardProps from "../../types/UserCardProps";

export const Container = styled.div<UserCardProps>`
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
  font-weight: 600;
  margin: 0.2rem;
`;

export const SubTitle = styled.h3`
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
  word-break: break-word;
  text-overflow: hidden;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
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

export const ImgContainer = styled.div<UserCardProps>`
  width: ${(props) =>
    props.imgSize === "tiny"
      ? "40px"
      : props.imgSize === "small"
      ? "56px"
      : props.imgSize === "medium"
      ? "72px "
      : "94px"};
  height: ${(props) =>
    props.imgSize === "tiny"
      ? "40px"
      : props.imgSize === "small"
      ? "56px"
      : props.imgSize === "medium"
      ? "72px "
      : "94px"};
  margin: 0.24rem;
  border-color: ${(props) => props.style?.borderColor || palletCollors.primary};
  border-width: ${(props) =>
    props.style?.borderColor === "thick"
      ? "4px"
      : props.style?.borderColor === "thin"
      ? "2px"
      : "0"};
  border-style: solid;
  border-radius: 50%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
