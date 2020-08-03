import { StyleSheet, DynamicColorIOS, PlatformColor } from 'react-native';
import { DEVICE, COLORS } from '../../constants';

export default StyleSheet.create({
  container: {
    width: DEVICE.width,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,

    elevation: 6,
  },

  gestureArea: {
    width: DEVICE.width,
    height: 40,

    marginTop: 10,
    position: 'absolute',

    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  pullItem: {
    width: 40,
    height: 5,

    borderRadius: 20,

    backgroundColor: DynamicColorIOS({
      light: PlatformColor('systemGray4'),
      dark: PlatformColor('systemGray2'),
    }),
  },

  content: {
    marginVertical: 30,
    paddingHorizontal: 10,

    height: '100%',
  },
});
