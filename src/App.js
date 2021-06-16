import './App.css';
import React from "react";
import Route from '../src/route/Route';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Route />
    </ChakraProvider>
  );
}

export default App;
