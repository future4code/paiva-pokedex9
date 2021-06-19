import styled from 'styled-components'

export const DetailsContainer = styled.div`
display: grid;
grid-auto-flow: column;
grid-template-columns: 1fr 1fr 1fr;
gap: 1px;
margin-top: 150px;
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
margin: 0;
img {
  height: 300px;
  width: 300px;
  text-align: center;
  padding: 0px;
}
`;
export const DetailsCard2 = styled.div`
display: flex;
flex-direction: column;
padding: 0px;
margin-left: 70px;
width: 125px;
`;
export const Title = styled.h1`
color: orange;
font-size: 20px;
font-weight: bolder;
text-align: center;
height: 20px;
text-shadow: 1px 1px 0 #000;
font-size: 30px;
margin-bottom: 10px;
`;
