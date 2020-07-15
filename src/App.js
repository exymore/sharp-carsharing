import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import HomeScreen from './pages/Home';
import DetailsScreen from './pages/Details';

const NativeStack = createNativeStackNavigator();
enableScreens();

function App() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home', headerShown: false }}
        />
        <NativeStack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ stackPresentation: 'modal' }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
