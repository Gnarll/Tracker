import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";

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
      <TouchableOpacity onPress={() => { navigation.navigate('Signin') }}>
        <Spacer>
          <Text style={styles.link}>Already have an account? Sign in instead</Text>
        </Spacer>
      </TouchableOpacity>
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
  link: {
    color: 'blue'
  }
});

export default SignupScreen;
