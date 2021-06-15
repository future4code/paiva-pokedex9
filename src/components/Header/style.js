import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;
  border-bottom:2px solid blue;
  a {
    grid-column-start: 2;
    margin: auto;
  }
`;
export const LogoContainer = styled.img`
  width: 20rem;
  margin: auto;
`;
export const BallContainer = styled.div`
  grid-column: 3/4;
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
