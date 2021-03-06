import React, { useCallback, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from "../components/Map";
import '../_mockLocation'
import { Context as LocationContext } from "../context/locationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);

  const callback = useCallback(location => {
    addLocation(location, state.recording);
  }, [state.recording])

  const [err] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Text h2 style={styles.text}>Create a Track</Text>
      </Spacer>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

// TrackCreateScreen.navigationOptions = () => {
//   return {  

// }

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center'
  }
});

export default withNavigationFocus(TrackCreateScreen);