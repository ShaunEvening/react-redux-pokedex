import React from 'react';
import { connect } from 'react-redux';

const PokemonCardComponent = ({ pokemon }) =>
  pokemon ? (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="pokemon image" />
    </div>
  ) : (
    <h4>No pokemon found</h4>
  );

const mapStateToProps = state => ({
  pokemon: state.pokemon,
});

export default connect(mapStateToProps)(PokemonCardComponent);
