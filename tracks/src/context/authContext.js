import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
      case 'signin': return { ...state, errorMessage: '', token: action.payload }
      case 'clear_error_message': return {...state, errorMessage: ''}
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const currentToken = await AsyncStorage.getItem('token')
  if(currentToken) {
    dispatch({type: 'signin', payload: currentToken})
    navigate('mainFlow') 
  } 
  else navigate('loginFlow') 
}

const clearErrorMessage = dispatch => () => {
  console.log('done')
  dispatch({type: 'clear_error_message'})
}

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post("/signup", { email, password });
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({type: 'signin', payload: response.data.token})
      navigate("TrackList")
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
  return async ({email, password}) => {
    try {
      const response = await trackerAPI.post('/signin', { email, password })
      await AsyncStorage.setItem('token', response.data.token)
      console.log(response.data.token)
      dispatch({type: 'signin', payload: response.data.token})
      navigate('TrackList')
    } catch(err) {
      dispatch({type: 'add_error', payload: 'Something went wrong with sign in'})
    }
  };
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
