import React from 'react';
import { Container, CircleBlue, CircleRed, CircleYellow, CircleGreen, ContainerCircles, BorderBlack, BorderWhite, TwoCircleRed, ContainerImg, ImgPoke, Icon, ButtonPoke, ContainerButton } from './style'
import pokeIcon from '../../img/poke-icon.png'
import { Link } from 'react-router-dom';
function CardPoke() {
    return (
        <Link to={`/pokemon-detail/:id`}>
            <Container>
                <ContainerCircles>
                    <CircleBlue></CircleBlue>
                    <CircleRed></CircleRed>
                    <CircleYellow></CircleYellow>
                    <CircleGreen></CircleGreen>
                </ContainerCircles>

                <BorderBlack>
                    <BorderWhite>
                        <ImgPoke src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif' />
                        <p>Charizard</p>
                    </BorderWhite>
                </BorderBlack>
                <ContainerButton>
                    <ButtonPoke><Icon src={pokeIcon} /></ButtonPoke>
                </ContainerButton>
            </Container>
        </Link>
    );
}

export default CardPoke;