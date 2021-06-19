import styled from 'styled-components'

export const PokedexContainer= styled.div`
background-color: rgb(238, 215, 75);
height: 100vh;

`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2%;
  color : black;
`

export const Title = styled.h1`
  margin-top: 20px;
  margin-left: 10px;
  color: orange;
  border-color: 1px solid blue;
  text-align: left;
  height: 20px;
  text-shadow: 4px 4px 4px #425878;
  font-size: 30px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-family: "Pokemon Solid", sans-serif;
  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;