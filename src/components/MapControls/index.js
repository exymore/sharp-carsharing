import React from 'react';
import { StyleSheet, View } from 'react-native';
import { faLocationArrow, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import MapControlsButton from '../MapControlsButton';

const MapControls = ({ zoomIn, zoomOut, findMe }) => {
  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <MapControlsButton icon={faPlus} handleClick={zoomIn} />
        <MapControlsButton icon={faMinus} handleClick={zoomOut} />
      </View>
      <View style={styles.group2}>
        <MapControlsButton icon={faLocationArrow} handleClick={findMe} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '40%',
    right: 16,
  },
  group1: {
    paddingBottom: 36,
  },
  group2: {
    flex: 1,
  },
});

export default MapControls;
