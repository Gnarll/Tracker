import React, {useContext} from "react";
import { Context as AuthContext } from "../context/authContext";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {

  const { state, signin, clearErrorMessage } = useContext(AuthContext)

  return <View style={styles.container}>
    <NavigationEvents onWillFocus={clearErrorMessage} />
    <AuthForm headerText={'Sign In to your account'} errorMessage={state.errorMessage} onSubmit={signin} submitButtonText={'Sign In'}/>
    <NavLink text={'Don\'t have an account? Sign up instead'} routeName={'Signup'}/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
})

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

export default SigninScreen