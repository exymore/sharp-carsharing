import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { iOSColors } from 'react-native-typography';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { typography } from '../../constants/typography';
import { useColors } from '../../services/hooks/useColors';

const AddressListItem = ({ name, address, icon, last, coords, handleClick }) => {
  const appearance = useColorScheme();
  const colors = useColors();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={() => handleClick(coords)}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          {icon ? (
            <FontAwesomeIcon
              style={{
                color: colors.greyLegacy,
              }}
              size={24}
              icon={icon}
            />
          ) : null}
        </View>
        <View style={styles.tileContainer}>
          <Text style={typography[appearance][Platform.OS].title}>{name}</Text>
          <Text style={styles.addressText}>{address}</Text>
        </View>
      </View>
      {!last ? (
        <View style={[styles.separator, { backgroundColor: colors.grey }]} />
      ) : null}
    </TouchableOpacity>
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
  },
});

export default AddressListItem;
