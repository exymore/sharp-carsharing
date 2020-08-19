import { useColorScheme } from 'react-native';
import mapValues from 'lodash/mapValues';
import { colors } from '../../constants/colors';
import { DEVICE } from '../../constants';

export function useColors() {
  const colorScheme = useColorScheme();

  return mapValues(colors[DEVICE.OS], color => color.dynamic[colorScheme]);
}
