/* eslint-disable prettier/prettier */
import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start(() => console.log('se ejecuta al terminar la animacion'));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => console.log('animacion'));
  };

  const startMovingPosition = (initPosition: number) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      //easing: Easing.bounce,
    }).start();
  };

  return {opacity, position, startMovingPosition, fadeIn, fadeOut};
};
