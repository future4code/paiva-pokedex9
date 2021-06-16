import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home/Home'
import Pokedex from '../pages/Pokedex'
import PokemonDetail from '../pages/PokemonDetail'

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokedex" component={Pokedex} />
        <Route exact path="/pokemon-detail" component={PokemonDetail} />
      </Switch>
    </BrowserRouter>
  );
};
export default RouteManager;