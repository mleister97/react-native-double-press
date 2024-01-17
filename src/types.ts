import {
  type GestureResponderEvent,
  type TouchableOpacityProps,
} from 'react-native';

export type DoubleTouchableOpacityProps = {
  onDoublePress?: (event: GestureResponderEvent) => void;
  doublePressDelay?: number;
} & TouchableOpacityProps;
