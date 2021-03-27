import { getPokemonsStart } from "../../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    pokemons: state.pokemons.pokemons,
    loading: state.app.loading,
  });
  const mapDispatchToProps = {
    getPokemons: getPokemonsStart,
  };

  export const connector = connect(mapStateToProps, mapDispatchToProps)