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

More on the official documentation: https://reactnative.dev/docs/touchableopacity

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
