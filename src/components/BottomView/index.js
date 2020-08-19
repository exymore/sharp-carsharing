import React from 'react';
import { View, Animated, SafeAreaView } from 'react-native';
import { animatedPosition, panGesture } from './pan-responder';
import styles from './styles';
import { useColors } from '../../services/hooks/useColors';

const BottomView = ({ children }) => {
  const colors = useColors();
  const backgroundColor = colors.background;

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
