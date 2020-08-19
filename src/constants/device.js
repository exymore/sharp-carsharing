import { Dimensions, Platform } from 'react-native';

export default {
  ...Dimensions.get('window'),
  OS: Platform.OS,
};
