import { Route, Switch } from "react-router-dom";
import Pokemons from "./pokemons/Pokemons";
import PokemonInfo from './pokemonInfo/PokemonInfo'

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Pokemons />
      </Route>
      <Route path='/details/:id'>
        <PokemonInfo />
      </Route>
    </Switch>
  );
};

export default App;
