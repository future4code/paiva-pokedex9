import styled from "styled-components";

export const ContainerMaster = styled.div`
  height: 100vh;
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  margin-top: 40px;
  margin-bottom: 10px;  
  h3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 15px 0 10px 0;
    padding: 10px 0px 0px 0px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 2rem;
  }
`;
export const DetailsCard1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0px;  
  margin-right:10px;  
  img {
    height: 300px;
    width: 300px;
    text-align: center;
    padding: 0px;
    margin-left: 30px;
    margin-top: 32px;   
  }
  @media (max-width: 768px) {
    display: flex;
    padding-top: 2rem;
    flex-direction: column;
    justify-content: center;
  }
`;
export const DetailsCard2 = styled.div`
  display: flex;
  flex-direction: column;  
  padding: 0px;
  margin-left:70px; 
  margin-right:5px;   
  width: 7rem;  
  @media (max-width: 768px) {
    display: flex;
    padding-top: 2rem;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;
export const DetailsCard3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;  
  width: 10rem;  
  @media (max-width: 768px) {
    display: flex;
    padding-top: 2rem;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  color: orange;
  text-align: center;
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

export const Load = styled.img`
  margin: auto;
`;
