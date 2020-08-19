import React, { useContext } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import { DEVICE } from '../../constants';
import { LocationContext } from '../../context/location';
import MapMarker from '../MapMarker';
import { mapConstants } from '../../constants/maps';

const Map = ({ region }) => {
  const location = useContext(LocationContext);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        loadingEnabled
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          ...mapConstants.mapDeltas,
        }}
        region={region}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        >
          <MapMarker />
        </Marker>
      </MapView>
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
