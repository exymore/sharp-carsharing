import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';
import BottomView from '../../components/BottomView';
import Map from '../../components/Map';
import AddressListItem from '../../components/AddressListItem';
import { mockCoordinates } from '../../mocks/coordinates';
import MapControls from '../../components/MapControls';
import { LocationContext } from '../../context/location';
import { useMap } from '../../services/hooks/useMap';

function HomeScreen({ navigation }) {
  const location = useContext(LocationContext);
  const { deltas, region, setRegion, findMe } = useMap(location);

  const placesMock = [
    { name: 'Home', address: 'Hryshina 59', icon: faHome, coords: mockCoordinates.home },
    {
      name: 'Work',
      address: 'Leninskaya 9',
      icon: faBriefcase,
      coords: mockCoordinates.work,
    },
  ];

  return (
    <View style={styles.background}>
      <Map region={{ ...region, ...deltas }} />
      <MapControls findMe={findMe} />
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
