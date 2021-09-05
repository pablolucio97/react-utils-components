import styled, { keyframes } from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import CarouselImageProps from "../../types/CarouselImageLabelProps";

const translatestf = keyframes`
    0% { transform:translateX(100%);  }
	100% { transform:translateX(-500%);  }
`;
const translateinfinite = keyframes`
	  0% { opacity: 0;  transform:translateX(24%); }
  10% { opacity: 1; }
	100% { transform:translateX(calc(-180px * 12));  }
`;

export const Container = styled.div<CarouselImageProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) =>
    props.containerHeigh === "low"
      ? "64px"
      : props.containerHeigh === "medium"
      ? "92px"
      : "120px"};
  background: ${palletCollors.white};
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.3);
  top: 0;
  right: 0;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  &:before {
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &:after {
    content: "";
    position: absolute;
    z-index: 9;
    width: 180px;
    height: 100%;
    top: 0;
    right: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const Li = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: ${palletCollors.lightGray2};
  animation: ${translatestf} 12s linear infinite;
  &:hover {
    color: cyan;
    color: #000;
  }
`;
export const Ul = styled.ul`
  display: flex;
  height: 100%;
  animation: ${translateinfinite} 16s linear infinite;
  width: 500%;
  width: calc(180px * 24);
`;

export const Img = styled.img`
  width: 160px;
  height: 40px;
  object-fit: contain;
`;
