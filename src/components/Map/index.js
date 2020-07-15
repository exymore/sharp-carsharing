import React from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import { DEVICE } from '../../constants';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 53.895255,
          longitude: 30.332891,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: DEVICE.height,
    width: DEVICE.width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
