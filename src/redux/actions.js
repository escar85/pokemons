import * as t from "./actionTypes";

export function getPokemonsStart() {
  return {
    type: t.GET_POKEMONS_START,
  };
}

export function getPokemonsSuccess(pokemons) {
  return {
    type: t.GET_POKEMONS_SUCCESS,
    payload: pokemons,
  };
}

export function getPokemonsFailure(error) {
  return {
    type: t.GET_POKEMONS_FAILURE,
    payload: error,
  };
}

export function getPokemonInfoStart(id) {
  return {
    type: t.GET_POKEMON_INFO_START,
    payload: id,
  };
}

export function getPokemonInfoSuccess(pokemonInfo) {
  return {
    type: t.GET_POKEMON_INFO_SUCCESS,
    payload: pokemonInfo,
  };
}

export function getPokemonInfoFailure(error) {
  return {
    type: t.GET_POKEMON_INFO_FAILURE,
    payload: error,
  };
}

export function showLoader() {
  return {
    type: t.SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: t.HIDE_LOADER,
  };
}
