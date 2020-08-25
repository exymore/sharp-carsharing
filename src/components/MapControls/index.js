import React from 'react';
import { StyleSheet, View } from 'react-native';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import MapControlsButton from '../MapControlsButton';

const MapControls = ({ findMe }) => {
  return (
    <View style={styles.container}>
      <MapControlsButton icon={faLocationArrow} handleClick={findMe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '55%',
    right: 16,
  },
});

export default MapControls;
