const POKEMON_ACTIONS = {
  SET_SEARCH_STRING: 'pokemon/SET_SEARCH_STRING',
  SET_POKEMON: 'pokemon/SET_POKEMON',
  SET_IS_LOADING: 'pokemon/SET_IS_LOADING',
};

export const updateSearchString = newString => ({
  type: POKEMON_ACTIONS.SET_SEARCH_STRING,
  payload: newString,
});

export const setPokemon = pokemon => ({
  type: POKEMON_ACTIONS.SET_POKEMON,
  payload: pokemon,
});

export const setIsLoading = boolean => ({
  type: POKEMON_ACTIONS.SET_IS_LOADING,
  payload: boolean,
});

export const fetchPokemonThunk = pokemonNumber => dispatch => {
  dispatch(setIsLoading(true));
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
    .then(response => response.json())
    .then(pokemon => {
      dispatch(setPokemon(pokemon));
      dispatch(setIsLoading(false));
    });
};

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
    case POKEMON_ACTIONS.SET_POKEMON: {
      return {
        ...state,
        pokemon: action.payload,
      };
    }
    case POKEMON_ACTIONS.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
