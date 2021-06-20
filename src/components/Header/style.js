import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #3761a8;  
  a {
    grid-column-start: 3;
    margin: auto;
  }
  @media (max-width: 768px) {
    display: flex;
    width:100vw;
  }
`;
export const ButtonContainer = styled.div`
  grid-column: 1/2;
  margin: auto;
  cursor: pointer;
  display: grid;
  .BackButton {
    left: 2rem;
    top: 0.1rem;
    margin: 0.1rem;
    width: 5rem;
  }
  @media (max-width: 768px) {
    display: flex;
    .BackButton {
      margin: 0;
      width: 5rem;
    }
`;

export const LogoContainer = styled.img`
  width: 15rem;
  margin: 0 auto;
`;
export const BallContainer = styled.div`
  grid-column: 4/5;
  margin: auto;
  img {
    left: 2rem;
    top: 3.3rem;
    width: 7rem;
    margin: 0.1rem;
    cursor: pointer;
    &:hover {
      width: 7rem;
      box-shadow: 0, 0, 0, 4px red;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    img {
      margin: 0;
      width: 5rem;
    }
  }
`;
