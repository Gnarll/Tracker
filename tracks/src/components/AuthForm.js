import React, { useState } from "react";
import { Text,  View, StyleSheet } from "react-native";
import { Button, Input } from 'react-native-elements'
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <>
        <Spacer>
          <Text style={styles.header} >{headerText}</Text>
        </Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <Spacer>
          <Button
            title={submitButtonText}
            onPress={() => onSubmit({email, password})}
          />
        </Spacer>
      </>
    );
}

const styles = StyleSheet.create({
    errorMessage: {
        color: "red",
        marginLeft: 15,
        fontSize: 16,
      },
    header: {
      fontSize: 25,
      alignSelf: 'center'
    }
})

export default AuthForm