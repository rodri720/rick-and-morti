import axios from "axios";
import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionsTypes";
const endpoint = "http://localhost:3001/rickandmorty/fav";

// SIN EXPRESS

/* export const addFavorite = (character) => {
  console.log(character);
  return {
    type: ADD_FAVORITE,
    payload: character,
  };
}; */

/* export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
}; */

// CON EXPRESS
// con promesas
/* export const addFavorite = (character) => {
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    });
  };
}; */
// con async await
export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// con promesas
/* export const deleteFavorite = (id) => {
  return (dispatch) => {
    axios.delete(`${endpoint}/${id}`).then(({ data }) => {
      return dispatch({
        type: DELETE_FAVORITE,
        payload: data,
      });
    });
  };
}; */

// con async await
export const deleteFavorite = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${endpoint}/${id}`);
      return dispatch({
        type: DELETE_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
