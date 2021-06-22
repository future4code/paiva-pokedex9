import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";
import Error from "../pages/Error/Error";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokedex" component={Pokedex} />
        <Route exact path="/pokemon/:id" component={PokemonDetail} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
export default RouteManager;
