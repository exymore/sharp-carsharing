import { iOSColors, material } from 'react-native-typography';
import { DynamicColorIOS, PlatformColor } from 'react-native';

export const colors = {
  android: {
    blackWhite: material.titleWhite,
  },
  ios: {
    blackWhite: DynamicColorIOS({
      light: PlatformColor('label'),
      dark: PlatformColor('label'),
    }),
    blackWhiteLegacy: DynamicColorIOS({
      light: iOSColors.black,
      dark: iOSColors.gray,
    }),
    grey: DynamicColorIOS({
      light: PlatformColor('separator'),
      dark: PlatformColor('separator'),
    }),
    blue: DynamicColorIOS({
      light: PlatformColor('systemBlue'),
      dark: PlatformColor('systemBlue'),
    }),
  },
};
