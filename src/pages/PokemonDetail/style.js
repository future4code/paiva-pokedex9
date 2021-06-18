import styled from 'styled-components'


export const DetailsContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1px;
    margin-top: 30px;
    margin-bottom: 40px;
    margin-left: 70px;
    h3 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 15px 0 10px 0;
      padding: 10px 0px 0px 0px;
      font-size: 14px;
    }
  `;
export const DetailsCard1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0px;
  img {
    height: 300px;
    width: 300px;
    text-align: center;
    padding: 0px;
    margin-right:20px;
  }
`;
export const DetailsCard2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-left: 70px;
  width: 10rem;
`;
export const DetailsCard3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
 width: 12rem;
`;

export const Title = styled.h1`
  color: orange;
  text-align: center;
  height: 20px;
  text-shadow: 4px 4px 4px #425878;
  font-size: 30px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-family: 'Pokemon Solid', sans-serif;                                                                                               
`;
