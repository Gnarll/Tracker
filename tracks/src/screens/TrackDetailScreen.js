import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Polyline } from "react-native-maps";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as TrackContext } from "../context/trackContext";

const TrackDetailScreen = ({ navigation }) => {

  const {state} = useContext(TrackContext)

  const _id = navigation.getParam('_id')

  const track = state.find((t) => t._id === _id)
  const initialCoords = track.locations[0].coords

  console.log(track)

  return <SafeAreaView>
    <Spacer>
      <Text style={styles.text}>{track.name}</Text>
    </Spacer>
    <Spacer>
      <MapView initialRegion={{
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
        ...initialCoords
      }} style={styles.map}>
        <Polyline coordinates={track.locations.map((loc) => loc.coords)}/>
      </MapView>
    </Spacer>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  map: {
    height: 300
  },
  text: {
    alignSelf: 'center',
    fontSize: 20
  }
})

export default TrackDetailScreen