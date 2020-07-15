import { View, StyleSheet, Platform } from 'react-native';
import React, { useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';
import BottomView from '../../components/BottomView';
import Map from '../../components/Map';

function HomeScreen({ navigation }) {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
  }, []);

  return (
    <View style={styles.background}>
      <Map />
      <BottomView />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
