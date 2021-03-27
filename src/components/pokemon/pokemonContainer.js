import { getPokemonInfoStart } from "../../redux/actions";
import { connect } from "react-redux";

  const mapDispatchToProps = {
    getPokemonInfo: getPokemonInfoStart,
  };

  export const connector = connect(null, mapDispatchToProps)