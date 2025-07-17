const initialState = {
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
  isFirstMenuOpen: true,
  userNameX: "",
  userNameO: "",
  field: ["", "", "", "", "", "", "", "", ""],
};

export const appReduser = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_PLAYER": {
      return { ...state, currentPlayer: payload };
    }
    case "SET_GAME_ENDED": {
      return { ...state, isGameEnded: payload };
    }
    case "SET_IS_DRAW": {
      return { ...state, isDraw: payload };
    }
    case "SET_IS_FIRST_MENU_OPEN": {
      return { ...state, isFirstMenuOpen: payload };
    }
    case "SET_USER_NAME_X": {
      return { ...state, userNameX: payload };
    }
    case "SET_USER_NAME_O": {
      return { ...state, userNameO: payload };
    }
    case "SET_FIELD": {
      return { ...state, field: payload };
    }
    case "TOGGLE_PLAYER": {
      return {
        ...state,
        currentPlayer: state.currentPlayer === "O" ? "X" : "O",
      };
    }
    default:
      return state;
  }
};
