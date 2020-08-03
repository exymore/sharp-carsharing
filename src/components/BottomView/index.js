import React from 'react';
import { View, Animated, SafeAreaView, Text } from 'react-native';

import { animatedPosition, panGesture } from './pan-responder';
import styles from './styles';

const BottomView = ({ children }) => (
  <Animated.View
    style={[styles.container, { transform: [{ translateY: animatedPosition }] }]}
  >
    <View style={styles.gestureArea} {...panGesture.panHandlers}>
      <View style={styles.pullItem} />
    </View>

    <SafeAreaView style={styles.content}>{children}</SafeAreaView>
  </Animated.View>
);

export default BottomView;
