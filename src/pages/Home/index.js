import { View, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import { faHome, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import BottomView from '../../components/BottomView';
import Map from '../../components/Map';
import AddressListItem from '../../components/AddressListItem';
import { mockCoordinates } from '../../mocks/coordinates';
import MapControls from '../../components/MapControls';
import { mapConstants, mapDelta, minDelta } from '../../constants/maps';
import { LocationContext } from '../../context/location';
import { DEVICE } from '../../constants';

function HomeScreen({ navigation }) {
  const location = useContext(LocationContext);

  const placesMock = [
    { name: 'Home', address: 'Hryshina 59', icon: faHome, coords: mockCoordinates.home },
    {
      name: 'Work',
      address: 'Leninskaya 9',
      icon: faBriefcase,
      coords: mockCoordinates.work,
    },
  ];

  const initialDeltas = mapConstants.mapDeltas;

  const initialRegion = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    ...initialDeltas,
  };

  const [localDeltas, setLocalDeltas] = useState(initialDeltas);
  const [region, setRegion] = useState(initialRegion);

  const _zoom = delta => {
    let resultDelta = localDeltas.latitudeDelta + delta;
    if (resultDelta < 0) resultDelta = minDelta;
    setLocalDeltas({
      ...localDeltas,
      latitudeDelta: resultDelta,
    });
  };

  const zoomIn = () => _zoom(-mapDelta - DEVICE.width / DEVICE.height);
  const zoomOut = () => _zoom(mapDelta + DEVICE.width / DEVICE.height);
  const findMe = () => {
    setRegion(initialRegion);
    setLocalDeltas(initialDeltas);
  };

  return (
    <View style={styles.background}>
      <Map region={{ ...region, ...localDeltas }} />
      <MapControls zoomIn={zoomIn} zoomOut={zoomOut} findMe={findMe} />
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
