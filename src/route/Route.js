import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home/Home'
import Pokedex from '../pages/Pokedex'
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail'
import Pictures from '../pages/Pictures/Pictures'
import Error from '../pages/Error/Error';

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokedex" component={Pokedex} />
        <Route exact path="/pokemon/:id" component={PokemonDetail} />
        <Route exact path="/pokemon/:name/images" component={Pictures} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
export default RouteManager;