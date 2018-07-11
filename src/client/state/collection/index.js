import { GAME_UPDATE_RESOLVED } from "./actionTypes";

const initialState = {
  games: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_UPDATE_RESOLVED:
      return {
        ...state,
        games: state.games.find(game => game.name === action.payload.game.name)
          ? state.games.map(game => ({
              ...(game.name === action.payload.game.name
                ? action.payload.game
                : game)
            }))
          : [...state.games, action.payload.game]
      };
    default:
      return state;
  }
};
