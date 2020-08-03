import React from 'react';
import {
  Platform,
  PlatformColor,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { iOSColors } from 'react-native-typography';
import { typography } from '../../constants/typography';

const AddressListItem = ({ name, address, icon, last }) => {
  const appearance = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.tileContainer}>
        <Text style={typography[appearance][Platform.OS].title}>{name}</Text>
        <Text style={styles.addressText}>{address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameText: {
    color: iOSColors.black,
  },
  addressText: {
    color: iOSColors.gray,
  },
  container: {
    flexDirection: 'row',
  },
  tileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 16,
    height: 32,
    width: 32,
  },
});

export default AddressListItem;
