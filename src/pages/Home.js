import React from 'react';
import Header from "../components/Header/Header";
import styled from 'styled-components';
import CardPoke from '../components/CardPoke/CardPoke';
// import Header from '../../src/components/Header/Header';

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2%;
`

function Home() {
  return (
    <div>
      <Header />
      <ContainerCard>
          <CardPoke />
          <CardPoke />
          <CardPoke />
          <CardPoke />
          <CardPoke />
          <CardPoke />
          <CardPoke />
          <CardPoke />
          <CardPoke />
          <CardPoke />
          <CardPoke />
      </ContainerCard>
    </div>
  );
}

export default Home;
