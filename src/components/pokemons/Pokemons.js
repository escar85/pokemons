import React from "react";
import Pokemon from "../pokemon/Pokemon";
import Loader from "../Loader";
import { connector } from "./pokemonsContainer";

const Pokemons = (props) => {
  const { pokemons, loading, getPokemons } = props;

  if (loading) {
    return <Loader />;
  }

  if (!pokemons.length) {
    return (
      <div className="container d-flex justify-content-center pt-5">
        <button
          type="button"
          className="btn btn-primary mt-5"
          onClick={getPokemons}
        >
          Загрузить покемонов
        </button>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="text-center mt-5">Покемоны</h1>
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={getPokemons}
      >
        Обновить
      </button>
      <div className="row row-cols-2 row-cols-md-4 g-4 mt-3">
        {pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default connector(Pokemons);
