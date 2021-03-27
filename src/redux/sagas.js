import { all, call } from "redux-saga/effects";

import { fetchPokemonsSaga } from "./pokemonsSaga";
import { fetchPokemonInfoSaga } from "./pokemonInfoSaga";

export function* pokemonsSagas() {
  yield all([call(fetchPokemonsSaga), call(fetchPokemonInfoSaga)]);
}
