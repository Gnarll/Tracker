import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";  
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);


  return (
    <View style={styles.container}>
      <AuthForm headerText='Signup for Tracker'
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText='Sign Up'
                navigation={navigation}
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
