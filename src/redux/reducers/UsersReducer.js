import {actionTypes} from '../actions/UserActions';

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_REQUEST:
      return {
        ...state,
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users:
          action.pageNumber === 1
            ? action.users
            : state.users.concat(action.users),
      };
    case actionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        users: null,
      };
    case actionTypes.ADD_TO_FAVORITE:
      //find the index of object from array that you want to update
      const objIndex = state.users.findIndex(
        obj => obj.email === action.user.email,
      );

      // make new object of updated object.
      const updatedObj = {...state.users[objIndex], favorite: true};

      // make final new array of objects by combining updated object.
      const updatedUsers = [
        ...state.users.slice(0, objIndex),
        updatedObj,
        ...state.users.slice(objIndex + 1),
      ];
      return {
        ...state,
        users: updatedUsers,
      };
    case actionTypes.REMOVE_FROM_FAVORITE:
      //find the index of object from array that you want to update
      const objectIndex = state.users.findIndex(
        obj => obj.email === action.user.email,
      );

      // make new object of updated object.
      const updatedObject = {...state.users[objectIndex], favorite: false};

      // make final new array of objects by combining updated object.
      const tempUsers = [
        ...state.users.slice(0, objectIndex),
        updatedObject,
        ...state.users.slice(objectIndex + 1),
      ];
      return {
        ...state,
        users: tempUsers,
      };
    default:
      return state;
  }
};

export default userReducer;
