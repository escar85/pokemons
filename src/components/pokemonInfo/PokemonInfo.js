import React from "react";
import { connector } from "./pokemonInfoContainer";
import Pokemon from "../pokemon/Pokemon";
import Loader from "../Loader";

const PokemonInfo = ({ pokemon, loading }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <Pokemon pokemon={pokemon} />
    </div>
  );
};

export default connector(PokemonInfo);
