import styled from 'styled-components'

export const HeaderContainer= styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
background-color: black;
`
export const LogoContainer = styled.img`
grid-column: 2/3;
width: 20rem;
`
export const BallContainer = styled.div`
grid-column:3/4;
img{
   left:2rem;
    top:3.3rem;
    width: 7rem;
    margin:0.1rem;
    position: relative;
    cursor:pointer;
}
img:hover{
    width: 9rem;
    box-shadow: 0,0,0,4px red;
}
    
`





