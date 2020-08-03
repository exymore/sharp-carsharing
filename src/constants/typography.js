import { human, material } from 'react-native-typography';

export const typography = {
  light: {
    android: {
      title: material.title,
    },
    ios: {
      title: human.headline,
    },
  },
  dark: {
    android: {
      title: material.titleWhite,
    },
    ios: {
      title: human.headlineWhite,
    },
  },
};
