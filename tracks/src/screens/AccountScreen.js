import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as authContext } from "../context/authContext";
import { SafeAreaView } from 'react-navigation'

const AccountScreen = () => {

  const { signout } = useContext(authContext)

  return <SafeAreaView forceInset={{top: 'always'}} >
    <Text>AccountScreen</Text>
    <Spacer>
      <Button title='Sign Out' onPress={signout} />
    </Spacer>
  </SafeAreaView>
}

const styles = StyleSheet.create({})

export default AccountScreen