import { View, StyleSheet } from 'react-native';
import React from 'react';
import BottomView from '../../components/BottomView';
import Map from '../../components/Map';
import AddressListItem from '../../components/AddressListItem';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Map />
      <BottomView>
        <AddressListItem name="Home" address="Hryshina 59" />
      </BottomView>
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
