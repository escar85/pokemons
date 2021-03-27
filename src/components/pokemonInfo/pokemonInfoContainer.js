import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    pokemon: state.pokemons.pokemonInfo,
    loading: state.app.loading,
  });

  export const connector = connect(mapStateToProps)