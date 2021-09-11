// globalStyles.js
import styled, { createGlobalStyle, css } from "styled-components";

interface ButtonType {
  type: any; ///Passing Optional Props
}

export const GlobalStyle = createGlobalStyle`
  body {
position: relative;
width: 1440px;
height: 1024px;
background: #FFFFFF;
  }
`;

// TODO: Style properly
export const Button = styled.button<ButtonType>`
  ${(props: ButtonType) =>
    props.type === "secondary" &&
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

      /* White */

      background: #ffffff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-radius: 32px;
      border: 2px solid;
      border-image-source: linear-gradient(257.39deg, #efb467 0%, #de8667 100%);
    `}
`;

export const ButtonText = styled.p`
  /* identical to box height */
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;
  background: -webkit-linear-gradient(257.39deg, #efb467 0%, #de8667 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Container = styled.div`
  text-align: center;
  background-color: blanchedalmond;
`;
