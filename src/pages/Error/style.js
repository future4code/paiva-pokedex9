import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(238, 215, 75);  
  @media (max-width: 768px) {
    height:100vh;
    width:100vw;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin: 0;
  }  
 `

export const ErrorContainer = styled.div`
   border-radius:20px;
   box-shadow: 10px 10px 10px #D3D3D3;   
   height:580px;
   width:832px;
   margin: auto;   
   background-color: #fbe34c;
   margin-top: 7rem;   
   p{
     color:#3e5dc2;
     text-align:center;
     font-weight:bold;     
   }
   button{   
     display:flex;
     align-items: center;  
     color:#fbe34c;
     text-align:center;
     font-weight:bold;
     background-color:#3e5dc2;
     border-radius:16px;     
     width:100px;
     height:28px;     
     margin: 0.5rem auto; 
     padding:6px;   
   }
   @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 2rem;
    height:100vh;
    width:100vw;
  }
`

