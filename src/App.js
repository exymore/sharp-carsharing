import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Alert, Appearance } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import HomeScreen from './pages/Home';
import DetailsScreen from './pages/Details';
import { LocationAccessContext } from './context/locationAccess';
import { LocationContext } from './context/location';
import { AppearanceContext } from './context/AppearanceContext';
import { DEVICE } from './constants';
import { colors } from './constants/colors';

const NativeStack = createNativeStackNavigator();
enableScreens();

function App() {
  const [locationAccessResult, setLocationAccessResult] = useState('');
  const [location, setLocation] = useState(null);

  const colorScheme = Appearance.getColorScheme();
  const getColor = colorName => colors[DEVICE.OS]?.[colorName].dynamic?.[colorScheme];

  useEffect(() => {
    if (DEVICE.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse').then(status =>
        setLocationAccessResult(status),
      );
    }
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, maximumAge: 1000 },
    );
  }, [locationAccessResult]);

  return (
    <LocationAccessContext.Provider value={locationAccessResult}>
      <LocationContext.Provider value={location}>
        <AppearanceContext.Provider value={{ getColor }}>
          <NavigationContainer>
            <NativeStack.Navigator>
              {location === null ? (
                <NativeStack.Screen
                  name="Splash"
                  component={DetailsScreen}
                  options={{ stackPresentation: 'modal', animationTypeForReplace: 'pop' }}
                />
              ) : (
                <>
                  <NativeStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                  />
                  <NativeStack.Screen
                    name="Settings"
                    component={DetailsScreen}
                    options={{
                      stackPresentation: 'modal',
                      animationTypeForReplace: 'pop',
                    }}
                  />
                </>
              )}
            </NativeStack.Navigator>
          </NavigationContainer>
        </AppearanceContext.Provider>
      </LocationContext.Provider>
    </LocationAccessContext.Provider>
  );
}

export default App;
