import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import AccountScreen from './src/screens/AccountScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import { Provider as AuthProvider } from "./src/context/authContext";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate:TrackCreateScreen,
    Account: AccountScreen
  })
})

const App = createAppContainer(switchNavigator);

export default () => {
  return <AuthProvider>
    <App />
  </AuthProvider>
};