import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/locationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import Spacer from './Spacer';

const TrackForm = () => {

    const {
        state: {locations, recording, name},
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)

    const [saveTrack] = useSaveTrack()

  return (
    <>
      <Spacer>
        <Input placeholder="Enter name" value={name} onChangeText={changeName} />
      </Spacer>
      <Spacer>
        {recording ? <Button title="Stop" onPress={stopRecording}/> : <Button title="Start Recording" onPress={startRecording} />}
      </Spacer>
      <Spacer>
        {!recording && locations.length != 0 ? <Button title='Save Recording' onPress={saveTrack}/> : null}
      </Spacer> 
    </>
  );
};

export default TrackForm;