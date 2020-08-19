import { iOSColors, material } from 'react-native-typography';
import { DynamicColorIOS, PlatformColor } from 'react-native';

export const colors = {
  android: {
    blackWhite: material.titleWhite,
  },
  ios: {
    background: DynamicColorIOS({
      light: PlatformColor('systemGray6'),
      dark: PlatformColor('systemGray4'),
    }),
    blackWhite: DynamicColorIOS({
      light: PlatformColor('label'),
      dark: PlatformColor('label'),
    }),
    greyLegacy: DynamicColorIOS({
      light: iOSColors.gray,
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
