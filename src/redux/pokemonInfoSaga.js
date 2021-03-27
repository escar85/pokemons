import { put, takeLatest, all, call } from "redux-saga/effects";
import { GET_POKEMON_INFO_START } from "./actionTypes";
import {
  getPokemonInfoSuccess,
  getPokemonInfoFailure,
  showLoader,
  hideLoader,
} from "./actions";

function* getPokemonInfoStart() {
  yield takeLatest(GET_POKEMON_INFO_START, getPokemonInfo);
}

function* getPokemonInfo(action) {
  try {
    yield put(showLoader());
    const response = yield fetch(
      `https://api.pokemontcg.io/v1/cards/${action.payload}`
    );
    const pokemonInfo = yield response.json();
    yield put(getPokemonInfoSuccess(pokemonInfo.card));
    yield put(hideLoader());
  } catch (error) {
    yield put(getPokemonInfoFailure(error.message));
  }
}

export function* fetchPokemonInfoSaga() {
  yield all([call(getPokemonInfoStart)]);
}
