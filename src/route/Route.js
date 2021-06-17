import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home/Home'
import Pokedex from '../pages/Pokedex'
import PokemonDetail from '../pages/PokemonDetail'
import Generation from '../pages/Generation/Generation'

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokedex" component={Pokedex} />
        <Route exact path="/pokemon/:name" component={PokemonDetail} />
        <Route exact path="/pokemon/:name/generation" component={Generation} />
      </Switch>
    </BrowserRouter>
  );
};
export default RouteManager;