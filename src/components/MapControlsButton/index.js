import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
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
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <FontAwesomeIcon icon={icon} />
    </TouchableOpacity>
  );
};

export default MapControlsButton;
