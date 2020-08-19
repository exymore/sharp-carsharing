import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { faHome, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import BottomView from '../../components/BottomView';
import Map from '../../components/Map';
import AddressListItem from '../../components/AddressListItem';
import { mockCoordinates } from '../../mocks/coordinates';
import MapControls from '../../components/MapControls';

function HomeScreen({ navigation }) {
  const placesMock = [
    { name: 'Home', address: 'Hryshina 59', icon: faHome, coords: mockCoordinates.home },
    {
      name: 'Work',
      address: 'Leninskaya 9',
      icon: faBriefcase,
      coords: mockCoordinates.work,
    },
  ];

  const [region, setRegion] = useState(null);

  return (
    <View style={styles.background}>
      <Map region={region} />
      <MapControls />
      <BottomView>
        {placesMock.map(place => (
          <AddressListItem
            key={place.address}
            name={place.name}
            address={place.address}
            icon={place.icon}
            coords={place.coords}
            handleClick={setRegion}
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
