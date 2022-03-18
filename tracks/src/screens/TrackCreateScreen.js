import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from "../components/Map";
import '../_mockLocation'
import { Context as LocationContext } from "../context/locationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {

console.log(isFocused)

  const { addLocation } = useContext(LocationContext)
  
  const [err] = useLocation(addLocation)

  return <SafeAreaView forceInset={{top: 'always'}}>

    <Text h3>Create Track</Text>
    <Map />
    {err ? <Text>Please enable location services</Text> : null}
  </SafeAreaView>
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)