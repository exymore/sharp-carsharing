import { Animated, PanResponder } from 'react-native';
import { ANIMATED } from '../../constants';

const STARTING_POSITION = ANIMATED.VISIBLE;

const animatedPosition = new Animated.Value(STARTING_POSITION);

function animateMove(toValue) {
  Animated.spring(animatedPosition, {
    toValue,
    tension: 160,
    friction: 14,
    useNativeDriver: false,
  }).start();
}

function getResultPosition(gestureState) {
  const v = movementVelocity(gestureState);

  if (ANIMATED.VISIBLE <= gestureState.moveY && gestureState.moveY <= ANIMATED.HIDDEN) {
    if (gestureState.moveY >= ANIMATED.HIDDEN - 100) return ANIMATED.HIDDEN;
    else if (v >= 1) return ANIMATED.HIDDEN;
    else return ANIMATED.VISIBLE;
  }
  if (gestureState.moveY <= ANIMATED.VISIBLE) {
    if (v >= -1) return ANIMATED.VISIBLE;
    else return ANIMATED.FULL_OPEN;
  }

  return ANIMATED.HIDDEN;
}

function movementValue(gestureState) {
  console.log(gestureState.moveY);
  return gestureState.moveY;
}

function movementVelocity(gestureState) {
  return gestureState.vy;
}

function onMoveShouldSetPanResponder(_, gestureState) {
  return gestureState.dy >= 10 || gestureState.dy <= -10;
}

function onPanResponderMove(_, gestureState) {
  const toValue = movementValue(gestureState);
  animateMove(toValue);
}

function onPanResponderRelease(_, gestureState) {
  const toValue = getResultPosition(gestureState);
  animateMove(toValue);
}

const panGesture = PanResponder.create({
  onPanResponderMove,
  onPanResponderRelease,
  onMoveShouldSetPanResponder,
});

export { animatedPosition, panGesture };
