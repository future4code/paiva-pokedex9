import React from 'react';
import { ToastContainer, toast, Zoom, Bounce} from 'react-toastify'


function Home() {


  const AddPokemon = ()=>{
toast.error("Pokemon adicionado na Pokedex")
toast.success("Pokemon adicionado na Pokedex")
toast.info("Pokemon adicionado na Pokedex")
toast.warn("Pokemon adicionado na Pokedex")

  }
    return (
      <div>
           <Header />
           <h1>Home</h1>
           <ToastContainer draggable={false}
           transition={Zoom}
           autoClose={8000}>

           <button onClick={AddPokemon} >Add</button>
           </ToastContainer>
      </div>
    );
  }
  
  export default Home;
  