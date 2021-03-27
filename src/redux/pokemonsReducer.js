import * as t from "./actionTypes";

const initialState = {
  pokemons: [],
  pokemonInfo: {},
  errorMessage: "",
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_POKEMONS_SUCCESS:
      return { ...state, pokemons: action.payload };

    case t.GET_POKEMONS_FAILURE:
      return { ...state, errorMessage: action.payload };

    case t.GET_POKEMON_INFO_SUCCESS:
      return { ...state, pokemonInfo: action.payload };

    case t.GET_POKEMON_INFO_FAILURE:
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};
