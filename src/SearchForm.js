import React from 'react';
import { connect } from 'react-redux';
import { updateSearchString } from './pokemonReducer';

const SearchForm = ({ searchString, dispatchUpdateSearchString }) => {
  console.log('UPDATED SEARCH', searchString);
  return (
    <form>
      <input type="text" placeholder="pokemon number" value={searchString} onChange={dispatchUpdateSearchString} />
      <button>Search</button>
    </form>
  );
};

const mapStateToProps = state => ({
  searchString: state.searchString,
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdateSearchString: e => dispatch(updateSearchString(e.target.value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchForm);
