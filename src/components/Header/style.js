import styled from 'styled-components'

export const HeaderContainer= styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
background-color: #ef5350;
`
export const LogoContainer = styled.img`
grid-column: 2/3;
width: 20rem;
`
export const BallContainer = styled.div`
grid-column:3/4;
img{
   left:-8rem;
    top:3.3rem;
    width: 7rem;
    margin:0.1rem;
    position: relative;
}
img:hover{
    width: 9rem;
    box-shadow: 0,0,0,4px red;
}
    
`




// width:12rem;
// height:4rem;
// border:1px solid #3761a8;
// border-radius: 5px;
// background-color:#feca1b;
// color: #3761a8;
// font-size:2rem;
// padding:0.1rem;
// padding-left:0.3rem;`



