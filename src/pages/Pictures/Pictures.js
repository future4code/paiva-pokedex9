import axios from "axios"
import React from "react"
import { useState, useEffect } from "react";
import  {BASE_URL}  from "../../Url/BASE_URL";
import {useParams} from 'react-router-dom'
import Header from "../../components/Header/Header";
import {
  Container,
  CircleBlue,
  CircleRed,
  CircleYellow,
  CircleGreen,
  ContainerCircles,
  BorderBlack,
  BorderWhite,
  ImgPoke,
  Icon,
  ButtonPoke,
  ContainerButton,
} from "../../components/CardPoke/style";
import usePictures from '../../hooks/UsePictures'


const Pictures = () =>{
     const params = useParams(); 
     const forms = usePictures([],`${BASE_URL}/${params.name}`);


  const [currImg, setCurrImg] = useState(0);


        
     
  
    
    const allPokemonsPictures = [{
        img:
     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'
    }]


    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11}.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/11.gif",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/11.png",
    // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/11.png",
    // }]
            
        return(
          <div>
            <Header/>
           {console.log(forms)}
           <img src={allPokemonsPictures.img} />
            {/* <Container>
        <ContainerCircles>
          <CircleBlue />
          <CircleRed />
          <CircleYellow />
          <CircleGreen />
        </ContainerCircles>

        <BorderBlack>
          <BorderWhite>
            <ImgPoke src={allPokemonsPictures[currImg].img} />
            <p>{allPokemonsPictures[currImg].img}</p>
          </BorderWhite>
        </BorderBlack>
        <ContainerButton>
          <ButtonPoke>
            <button
             onClick={() => {
              currImg < allPokemonsPictures.length - 1 && setCurrImg(currImg + 1)}}
            >
              back
            </button> 
            <button>
              next
            </button>
            </ButtonPoke>
        </ContainerButton>
      </Container> */}
            
          </div>
        )
}
export default Pictures;