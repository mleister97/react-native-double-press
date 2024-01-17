# react-native-double-press

Enhance the functionality of the standard TouchableOpacity component in React Native by seamlessly integrating the
capability for double presses. This package provides a `DoubleTouchableOpacity` component, allowing developers to easily
incorporate double-click interactions into their React Native applications.

## Installation

```sh
npm install react-native-double-press
```

## Usage

```js
import DoubleTouchableOpacity from 'react-native-double-press';

<DoubleTouchableOpacity onPress={onItemPressHandler} onDoublePress={onToggleBookmarkPressHandler}>
  <Text>Press me once or double.</Text>
</DoubleTouchableOpacity>
```

## API
### Props
All props are spread onto underlying [TouchableOpacity component](https://reactnative.dev/docs/touchableopacity)

| Name             | Type                                                   | Description                            |
|------------------|--------------------------------------------------------|----------------------------------------|
| onDoublePress    | ((event: GestureResponderEvent) =>  void) \| undefined | Called when double press was detected. |
| doublePressDelay | number \| undefined                                    | Defaults to 250ms                      |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
