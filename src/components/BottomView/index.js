import React from 'react';
import { View, Animated, SafeAreaView } from 'react-native';

import { animatedPosition, panGesture } from './pan-responder';
import styles from './styles';

const BottomView = () => (
  <Animated.View
    style={[styles.container, { transform: [{ translateY: animatedPosition }] }]}
    {...panGesture.panHandlers}
  >
    <View style={styles.gestureArea}>
      <View style={styles.pullItem} />
    </View>

    <SafeAreaView style={styles.content}>
      <View style={styles.container} />
    </SafeAreaView>
  </Animated.View>
);

export default BottomView;
