import axios from "axios"
import React from "react"
import { useState, useEffect } from "react";
import {Url_Base} from '../../Url/Url'
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


const Generation = () =>{
  const [currImg, setCurrImg] = useState(0);
    const [generationList, setGenerationList] = useState({})
    const [version, setVersion ] = useState({})


    const [generationiyelllow, setGenerationiyelllow ]= useState({})


    const [generationiicrystal, setGenerationiicrystal] = useState({})
    const [generationiigold, setGenerationiigold] = useState({}) 
    const [generationiisilver, setGenerationiisilver] = useState({})
    const [generationiiiesmerald, setGenerationiiiesmerald] = useState({})
    const [generationiiifirered,setGenerationiiifirered] = useState({})
    const [generationiiiruby , setGenerarion]= useState({})
    const [generationivdiamond, setGenerationivdiamond] = useState({})
    const [ generationivheartgold , setGenerationivheartgold] = useState({})
    const [generationivplatinum, setGenerationivplatinum] = useState({})
    const [generationvblackanimated , setGenerationvblackanimated] = useState({})
    const [generationvblack , setGenerationvblack ] = useState({})
    const [generationviomega, setGenerationviomega ] = useState({})
    const [generationvxy , setGenerationvxy ] = useState({})
    const [generationviiicons, setGenerationviiicons ] = useState({})
    const [generationviiultra, setGenerationviiultra] = useState({})
    const [generationviii, setGenerationviii ] = useState({})
  
           
             
            const params = useParams();
        
        useEffect(() => {
          axios
            .get(`${Url_Base}/${params.name}`)
            .then((res) => {
              setGenerationList(res.data.sprites);
              setVersion(res.data.sprites.versions)
              // setGenerationiyelllow(res.data.versions['generation-i'].yellow.front_default)



            })
            .catch((erro) => {
              console.log(erro);
            });
        });  
  
    
    const allPokemonsPictures = {
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${params.id}.gif",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${params.id}.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${params.id}.png",
    }
            
        return(
          <div>
            <Header/>
            {/* {console.log(`oi`,allPokemonsPictures )}
            {console.log(`foto1`, generation0)}
            {console.log(`foto2`, generationdream)}
    {console.log(`foto3`, generationofficial )   } 
    {console.log(`foto4`,generationired)}
      */}
            {/* <Container>
        <ContainerCircles>
          <CircleBlue />
          <CircleRed />
          <CircleYellow />
          <CircleGreen />
        </ContainerCircles>

        <BorderBlack>
          <BorderWhite>
            <ImgPoke src={generationList[currImg].img} />
            <p>{generationList[currImg].name}</p>
          </BorderWhite>
        </BorderBlack>
        <ContainerButton>
          <ButtonPoke>
            <button
             onClick={() => {
              currImg < generationList.length - 1 && setCurrImg(currImg + 1)}}
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
export default Generation;