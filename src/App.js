import './App.css';
import React from "react";
import Route from '../src/route/Route'
import GlobalState from './global/GlobalStateContext';

function App() {
  return (
   <>
    <GlobalState>
      <Route />
    </GlobalState>
   </>
  );
}

export default App;
