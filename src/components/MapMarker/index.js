import React from 'react';
import { Platform, StyleSheet, useColorScheme, View } from 'react-native';
import { colors } from '../../constants/colors';

const MapMarker = () => {
  const appearance = useColorScheme();

  return (
    <View style={styles.markerView}>
      <View
        style={{
          ...styles.markerInnerView,
          backgroundColor: colors[Platform.OS].blue?.dynamic?.[appearance],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  markerView: {
    borderRadius: 100,
    backgroundColor: 'white',
    width: 24,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.48,
    shadowRadius: 16.0,
  },
  markerInnerView: {
    borderRadius: 100,
    width: 16,
    height: 16,
  },
});

export default MapMarker;
