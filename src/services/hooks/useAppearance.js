import { useDarkMode } from 'react-native-dynamic';

export function useAppearance() {
  const isDarkMode = useDarkMode();
  return isDarkMode ? 'dark' : 'light';
}
