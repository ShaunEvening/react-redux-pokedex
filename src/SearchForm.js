import React from 'react';
import { connect } from 'react-redux';
import { updateSearchString, fetchPokemonThunk } from './pokemonReducer';

const SearchForm = ({ searchString, dispatchUpdateSearchString, dispatchFetchPokemon }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      dispatchFetchPokemon(searchString);
    }}
  >
    <input type="text" placeholder="pokemon number" value={searchString} onChange={dispatchUpdateSearchString} />
    <button type="submit">Search</button>
  </form>
);

const mapStateToProps = state => ({
  searchString: state.searchString,
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdateSearchString: e => dispatch(updateSearchString(e.target.value)),
  dispatchFetchPokemon: pokemonNumber => dispatch(fetchPokemonThunk(pokemonNumber)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);
