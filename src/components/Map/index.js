import React, { useContext } from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import { DEVICE } from '../../constants';
import { LocationContext } from '../../context/location';

const Map = () => {
  const location = useContext(LocationContext);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
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
