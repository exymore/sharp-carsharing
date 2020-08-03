import { View, StyleSheet } from 'react-native';
import React from 'react';
import { faHome, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import BottomView from '../../components/BottomView';
import Map from '../../components/Map';
import AddressListItem from '../../components/AddressListItem';

function HomeScreen({ navigation }) {
  const placesMock = [
    { name: 'Home', address: 'Hryshina 59', icon: faHome },
    { name: 'Work', address: 'Leninskaya 9', icon: faBriefcase },
  ];

  return (
    <View style={styles.background}>
      <Map />
      <BottomView>
        {placesMock.map(place => (
          <AddressListItem
            key={place.address}
            name={place.name}
            address={place.address}
            icon={place.icon}
          />
        ))}
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
