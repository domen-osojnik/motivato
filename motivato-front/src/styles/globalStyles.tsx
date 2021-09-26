// globalStyles.js
import { Link } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";

interface ButtonType {
  type: any; //Passing Optional Props
}

export const GlobalStyle = createGlobalStyle`
  body {
    background: #FFFFFF;
    font-family:"Railway"
  }

  input{
    width: 420px;
    border: 2px solid #DE8667;
    border-radius: 32px;
    height: 40px;
    margin-top:5px;
    padding: 8px 30px 8px 24px;
    color: #322D38;
    &.50-p{
width: 202px;
    }
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    cursor: pointer;
  }
`;

// TODO: Style properly
export const Button = styled.button<ButtonType>`
  cursor: pointer;
  ${(props: ButtonType) =>
    props.type === "primary" &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;

      position: static;
      width: 137px;
      height: 40px;
      left: 168px;
      top: 0px;

      padding: 8px, 16px, 8px, 16px;

      border-radius: 32px;

      border: solid 2px transparent;
      background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(257.39deg, #efb467, #de8667);
      background-origin: border-box;
      background-clip: content-box, border-box;
    `}
  ${(props: ButtonType) =>
    props.type === "secondary" &&
    css`
      color: white;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;

      position: static;
      width: 137px;
      height: 40px;
      left: 168px;
      top: 0px;

      padding: 8px, 16px, 8px, 16px;

      border-radius: 32px;

      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

      border: solid 2px transparent;
      background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(257.39deg, #efb467, #de8667);
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: 2px 1000px 1px #fff inset;
    `};
`;

export const ButtonText = styled.text<ButtonType>`
  ${(props: ButtonType) =>
    props.type === "primary" &&
    css`
      font-family: Raleway;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      color: white;
    `}
  ${(props: ButtonType) =>
    props.type === "secondary" &&
    css`
      font-family: Raleway;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      color: white;
      background: linear-gradient(to right, #efb467, #de8667);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;

export const Container = styled.div`
  text-align: center;
  background-color: blanchedalmond;
`;
