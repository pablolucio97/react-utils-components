import styled from "styled-components";
import { palletCollors } from "../../styles/palletCollors";
import ProductCardProps from "../../types/ProductCardProps";

export const Container = styled.div<ProductCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 272px;
  height: 400px;
  padding: 0.8rem;
  margin: 1.6rem;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
  text-overflow: ellipsis;
  background: ${(props) => props.style?.background || palletCollors.white};
  border-radius: ${(props) => props.style?.borderRadius || "4px"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: ${(props) => (props.animationOnHover ? "scale(1.024)" : "none")};
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  margin: 0.2rem;
  font-size: 0.92rem;
  word-break: break-word;
`;

export const Description = styled.span`
  font-weight: 500;
  margin: 0.24rem;
  color: ${palletCollors.lightGray2};
`;

export const Price = styled.span`
  font-weight: 500;
  margin: 0.24rem;
  color: ${palletCollors.black2};
`;

export const CardPrice = styled.span`
  font-weight: 400;
  margin: 0.24rem;
  font-size: 0.88rem;
  color: ${palletCollors.lightGray2};
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

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0.4rem;
`;

export const ImgContainer = styled.div<ProductCardProps>`
  width: 160px;
  height: 160px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  background: transparent;
  width: 32px;
  height: 32px;
  padding: 0.24rem;
  border-radius: 100%;
  transition: all 0.12s ease;

  &:hover {
    color: ${palletCollors.primary};
  }
`;
