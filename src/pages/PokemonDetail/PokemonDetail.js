import React from "react";
import { Progress, Stack, Text, Flex } from "@chakra-ui/react";
import { BASE_URL } from "../../Url/BASE_URL";
import { useParams } from "react-router-dom";
import useRequestDetail from "../../hooks/useRequestDetail";
import Header from '../../components/Header/Header';
import { DetailsContainer, DetailsCard1, DetailsCard2, Title } from './style';


const PokemonDetail = () => {
  const params = useParams();
  const detailPoke = useRequestDetail([], `${BASE_URL}/${params.id}`);

  console.log("DETALHES", detailPoke);

  const poderes =
    detailPoke.stats &&
    detailPoke.stats.map((stat) => {
      return (
        <>
          <h3>
            <p>{stat.stat.name}</p>
            <p>{stat.base_stat}</p>
          </h3>
          <Progress
            colorScheme="red"
            size="sm"
            max={150}
            value={stat.base_stat}
          />
        </>
      );
    });

  const ataques =
    detailPoke.moves &&
    detailPoke.moves.map((ataque, index) => {
      return (
        index < 5 && (
          <Text key={ataque.move.name} fontSize={16} fontWeight="bold">
            {ataque.move.name}
          </Text>
        )
      );
    });


  return (
    <>
      <Header />
      {detailPoke && detailPoke.sprites ? (
        <DetailsContainer>
          <DetailsCard1>
            <Title>{poke.name}</Title>
            <img src={detailPoke.sprites.other["official-artwork"].front_default} />
            <Text fontWeight="bold">Tipo:</Text>
            {detailPoke &&
              detailPoke.types.map((type) => {
                return <Text key={type.type.name}>{type.type.name}</Text>;
              })}
          </DetailsCard1>
          <Stack spacing={2} justify="center">
            <Title>Poderes</Title>
            <div>{poderes}</div>
          </Stack>
          <DetailsCard2>
            <Title>Ataques</Title>
            <br />
            <br />
            {ataques}
          </DetailsCard2>
        </DetailsContainer>
      ) : (
        <p>Carregando informações</p>
      )}
    </>
  );
};
export default PokemonDetail;
