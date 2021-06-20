import styled from 'styled-components'

export const PokedexContainer = styled.div`
  background-color: rgb(238, 215, 75);
  height: 100vh;
`;
export const BattleContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  align-self: center;
 > div {
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     margin: 0 18px;
 }
 h1 {
     font-family: 'pokeHollow';
 }
img {
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 5px;
}
h2 {
    text-transform: capitalize;
}
}
#winner {
    width: 100%;
    text-align: center;
    text-transform:capitalize;
}
`
export const PokeImage = styled.img`
  width: 50px;
  height: 50px;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 2%;
  color : black;
  margin-right:50px;
  margin-left:50px;
 
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 1.5rem;
  }
  `

export const Title = styled.h1`
  margin-top: 20px;
  margin-left: 50px;
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
`