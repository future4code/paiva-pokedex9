import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #3761a8;
  a {
    grid-column-start: 3;
    margin: auto;
  }
`;
export const LogoContainer = styled.img`
  width: 20rem;
  margin: auto;
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
  }
  img:hover {
    width: 9rem;
    box-shadow: 0, 0, 0, 4px red;
  }
`;
