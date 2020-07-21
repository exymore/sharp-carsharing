import { View, StyleSheet } from 'react-native';
import React from 'react';
import BottomView from '../../components/BottomView';
import Map from '../../components/Map';

function HomeScreen({ navigation }) {
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
