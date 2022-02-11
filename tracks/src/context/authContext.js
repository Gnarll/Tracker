import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
      case 'signup': return { ...state, errorMessage: '', token: action.payload }
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }, callback) => {
    try {
      console.log(email, password);
      const response = await trackerAPI.post("/signup", { email, password });
      AsyncStorage.setItem('token', response.data.token)
      dispatch({type: 'signup', payload: response.data.token})
      if(callback) callback()
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
      console.log(err.response.data);
    }
  };
};

const signin = (dispatch) => {
  return () => {};
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
