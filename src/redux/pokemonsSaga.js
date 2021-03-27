import { put, takeLatest, all, call } from "redux-saga/effects";
import { GET_POKEMONS_START } from "./actionTypes";
import {
  getPokemonsSuccess,
  getPokemonsFailure,
  showLoader,
  hideLoader,
} from "./actions";

// watcher
function* getPokemonsStart() {
  yield takeLatest(GET_POKEMONS_START, getPokemons);
}

// worker
function* getPokemons() {
  try {
    yield put(showLoader());
    const response = yield fetch("https://api.pokemontcg.io/v1/cards");
    const pokemons = yield response.json();
    yield put(getPokemonsSuccess(pokemons.cards));
    yield put(hideLoader());
  } catch (error) {
    yield put(getPokemonsFailure(error.message));
  }
}

export function* fetchPokemonsSaga() {
  yield all([call(getPokemonsStart)]);
}
