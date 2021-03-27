import React from "react";
import { Link, useLocation } from "react-router-dom";
import { connector } from "./pokemonContainer";

const Pokemon = (props) => {
  const { pokemon, getPokemonInfo } = props;
  const url = useLocation();

  return (
    <div className="card w-25">
      <img
        src={pokemon.imageUrl}
        alt={pokemon.name}
        className="card-image-top"
      ></img>
      <div className="card-body">
        <h4 className="card-title text-center">{pokemon.name}</h4>
      </div>
      {url.pathname === "/" ? (
        <Link
          to={`/details/${pokemon.id}`}
          onClick={() => getPokemonInfo(pokemon.id)}
          className="btn btn-info"
        >
          More info
        </Link>
      ) : (
        <>
          <p className="card-text">HP: {pokemon.hp}</p>
          <p className="card-text">Artist: {pokemon.artist}</p>
          <p className="card-text">Series: {pokemon.series}</p>
          <Link to="/" className="btn btn-primary">
            На главную
          </Link>
          <button
            type="button"
            onClick={() => getPokemonInfo(pokemon.id)}
            className="btn btn-info mt-2"
          >
            Обновить
          </button>
        </>
      )}
    </div>
  );
};

export default connector(Pokemon);
