import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useColors } from '../../services/hooks/useColors';

const MapControlsButton = ({ icon, handleClick }) => {
  const colors = useColors();

  const styles = StyleSheet.create({
    button: {
      marginVertical: 8,
      width: 42,
      height: 42,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.24,
      shadowRadius: 16.0,
    },
  });

  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? colors.backgroundPressed : colors.background },
        styles.button,
      ]}
      onPress={handleClick}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{
          color: colors.greyLegacy,
        }}
      />
    </Pressable>
  );
};

export default MapControlsButton;
