const POKEMON_ACTIONS = {
  SET_SEARCH_STRING: 'pokemon/SET_SEARCH_STRING',
};

export const updateSearchString = newString => ({
  type: POKEMON_ACTIONS.SET_SEARCH_STRING,
  payload: newString,
});

const INITIAL_POKEMON_STATE = {
  searchString: '',
  isLoading: false,
  pokemon: null,
};

export const pokemonReducer = (state = INITIAL_POKEMON_STATE, action) => {
  switch (action.type) {
    case POKEMON_ACTIONS.SET_SEARCH_STRING: {
      return {
        ...state,
        searchString: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
