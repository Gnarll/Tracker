import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/locationContext';
import Spacer from './Spacer';

const TrackForm = () => {

    const {
        state: {name, recording},
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)

  return (
    <>
      <Spacer>
        <Input placeholder="Enter name" onChange={changeName} />
      </Spacer>
      {recording ? <Button title="Stop" onPress={stopRecording}/> : <Button title="Start Recording" onPress={startRecording} />}
    </>
  );
};

export default TrackForm;