import APIRequest from '../../data/APIRequest';
import {Result, UserResponse} from '../../data/UserResponse';

export const actionTypes = {
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE',
  ADD_TO_FAVORITE: 'ADD_TO_FAVORITE',
  REMOVE_FROM_FAVORITE: 'REMOVE_FROM_FAVORITE',
};

const getUsersRequest = () => ({
  type: actionTypes.GET_USERS_REQUEST,
});

const getUsersError = error => ({
  type: actionTypes.GET_USERS_FAILURE,
  error,
});

const getUsersSuccess = (users: Array<Result>, pageNumber: number) => ({
  type: actionTypes.GET_USERS_SUCCESS,
  users,
  pageNumber,
});

const favoriteRequest = (user: Result) => ({
  type: actionTypes.ADD_TO_FAVORITE,
  user,
});

const unFavoriteRequest = (user: Result) => ({
  type: actionTypes.REMOVE_FROM_FAVORITE,
  user,
});

export const getUsers = (pageNumber: number) => async dispatch => {
  dispatch(getUsersRequest());
  try {
    return new Promise(async (success, reject) => {
      const users = await APIRequest.getUsers(pageNumber);
      if (users !== null) {
        success(users.data.results);
        dispatch(getUsersSuccess(users.data.results, pageNumber));
      } else {
        reject(users);
      }
    });
  } catch (error) {
    dispatch(getUsersError(error.message));
  }
};

export const favoriteClick = (user: Result) => async dispatch => {
  dispatch(favoriteRequest(user));
};

export const unFavoriteClick = (user: Result) => async dispatch => {
  dispatch(unFavoriteRequest(user));
};
