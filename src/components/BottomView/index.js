import React from 'react';
import {
  View,
  Animated,
  SafeAreaView,
  Text,
  DynamicColorIOS,
  PlatformColor,
  useColorScheme,
} from 'react-native';

import { animatedPosition, panGesture } from './pan-responder';
import styles from './styles';

const BottomView = ({ children }) => {
  const appearance = useColorScheme();

  const backgroundColor = DynamicColorIOS({
    light: PlatformColor('systemGray6'),
    dark: PlatformColor('systemGray4'),
  })?.dynamic?.[appearance];

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor,
          transform: [{ translateY: animatedPosition }],
        },
      ]}
    >
      <View style={styles.gestureArea} {...panGesture.panHandlers}>
        <View style={styles.pullItem} />
      </View>

      <SafeAreaView style={styles.content}>{children}</SafeAreaView>
    </Animated.View>
  );
};

export default BottomView;
