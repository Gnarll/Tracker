import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";  
import { Context as authContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(authContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
      <AuthForm headerText='Signup for Tracker'
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText='Sign Up'
      />
      <NavLink text={'Already have an account? Sign in instead'} routeName={'Signin'}/>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SignupScreen;
