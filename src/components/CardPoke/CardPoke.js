import React from 'react';
import { Container, CircleBlue, CircleRed, CircleYellow, CircleGreen, ContainerCircles, BorderBlack, BorderWhite, TwoCircleRed, ContainerImg, ImgPoke } from './style'

function CardPoke() {
    return (
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
            <div>
                <button>Adicionar a pokedex</button>
                <button>Detalhes</button>
            </div>
        </Container>
    );
}

export default CardPoke;