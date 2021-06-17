import React from "react";
import Route from '../src/route/Route'
import { GlobalState } from './global/GlobalState'
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
   <>
    <GlobalState>
      <ChakraProvider>
        <Route />
      </ChakraProvider>
    </GlobalState>
   </>
  );
}

export default App;
