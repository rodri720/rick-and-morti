import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionsTypes";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state, myFavorites: payload, allCharacters: payload
      };
    case DELETE_FAVORITE:
      return {
        ...state, myFavorites: payload
      }
    case FILTER:
      const filterByGender = [...state.allCharacters].filter(
        (char) => char.gender.toLowerCase() === payload.toLowerCase()
      );
      return {
        ...state,
        myFavorites: filterByGender,
      };
    case ORDER:
      const filterByOrder = [...state.allCharacters].sort((a, b) => {
        if (a.id > b.id) {
          return payload === "Ascendente" ? 1 : -1;
        } else if (a.id < b.id) {
          return payload === "Descendente" ? 1 : -1;
        } else {
          return 0;
        }
        /* if (payload === "Ascendente" && a.id > b.id) {
          return 1;
        } else if (payload === "Ascendente" && a.id < b.id) return -1; */
      });
      return {
        ...state,
        myFavorites: filterByOrder,
      };

    default:
      return { ...state };
  }
};

export default reducer;
