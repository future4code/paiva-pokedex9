import { keyframes } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ef5350;
  width: 250px;
  height: 310px;
  border-radius: 5px;
  margin: 10px;
  margin-top: 40px;

  a {
    text-decoration: none;
    color: black;
  }

  :hover {
    transform: scale(1.1, 1.1);
    transition-duration: 0.3s;
  }
`;

export const ContainerCircles = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  padding-bottom: 5px;
`;

export const CircleBlue = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 0 0 20px;
  background-color: #3761a8;
  border: 1px white solid;
`;

export const CircleRed = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px 0 5px;
  border-radius: 50%;
  background-color: #ef5350;
  border: 1px white solid;
`;
export const CircleYellow = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px 0 5px;
  border-radius: 50%;
  border: 1px white solid;
  background-color: #feca1b;
`;

export const CircleGreen = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px 0 5px;
  border-radius: 50%;
  border: 1px white solid;
  background-color: #3761a8;
`;

export const BorderBlack = styled.div`
  border: 1px black solid;
  margin: 5px;
  height: 185px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const BorderWhite = styled.div`
  background-color: #ffffff;
  height: 165px;
  width: 210px;
  border-radius: 2px 2px 2px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;

  div {
    display: flex;
    gap: 5px;
    border: 1px white solid;
    margin-bottom: 2px;
  }

  p {
    text-transform: capitalize;
  }
`;

export const ImgPoke = styled.img`
  margin-top: 10px;
  width: 100px;
`;

export const ButtonPoke = styled.button`
  border: none;
  background-color: none;

  &:hover {
    animation: Icon 1.3s linear both infinite;

    @keyframes Icon {
      0% {
        transform: scale(1) rotateZ(0);
      }
      50% {
        transform: scale(2) rotateZ(180deg);
      }
      100% {
        transform: scale(1) rotateZ(360deg);
      }
    }
  }
`;

export const Icon = styled.img`
  margin-top: 5px;
  width: 30px;
  border-radius: 50%;
  box-shadow: 0 0 0.5em white;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
`;
