import { StyleSheet } from 'react-native';
import { DEVICE, COLORS } from '../../constants';

export default StyleSheet.create({
  container: {
    width: DEVICE.width,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.BORDER,

    backgroundColor: COLORS.WHITE,

    elevation: 6,
  },

  gestureArea: {
    width: DEVICE.width,
    height: 20,

    marginTop: 10,
    position: 'absolute',

    backgroundColor: COLORS.WHITE,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  pullItem: {
    width: 40,
    height: 5,

    borderRadius: 20,

    backgroundColor: COLORS.SECONDARY,
  },

  content: {
    marginVertical: 30,
    paddingHorizontal: 10,

    height: '100%',
  },
});
