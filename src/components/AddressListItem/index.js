import React from 'react';
import { Platform, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { iOSColors } from 'react-native-typography';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { typography } from '../../constants/typography';
import { colors } from '../../constants/colors';

const AddressListItem = ({ name, address, icon, last }) => {
  const appearance = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            style={{ color: colors[Platform.OS].blackWhiteLegacy?.dynamic?.[appearance] }}
            size={24}
            icon={icon}
          />
        </View>
        <View style={styles.tileContainer}>
          <Text style={typography[appearance][Platform.OS].title}>{name}</Text>
          <Text style={styles.addressText}>{address}</Text>
        </View>
      </View>
      {!last ? <View style={styles.separator} /> : null}
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
    flexDirection: 'column',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tileContainer: {
    flexDirection: 'column',
  },
  iconContainer: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 32,
  },
  separator: {
    marginTop: 12,
    width: '100%',
    height: 1,
    backgroundColor: colors[Platform.OS].grey,
  },
});

export default AddressListItem;
