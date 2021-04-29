# react-native-switch

A simple switch component with icons support.

## Dependencies
This library requires [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons),

## Example

![example](./assets/example.gif)

## Installation

```bash
npm i @samcode/react-native-switch
```

or

```bash
yarn add @samcode/react-native-switch
```

## Simple Usage

```js
import React, { useState } from 'react'
import Switch from '@samcode/react-native-switch';

const App = () => {
  const [value, setValue] = useState(false);
  return (
    <Switch
      onValueChange={val => setValue(val))}
      value={value}
    />
  )
}


```

## Change Track and thumb color

```js
import React, { useState } from 'react'
import Switch from '@samcode/react-native-switch';

const trackColor = {
  true: 'rgb(74,164,144)',
  false: 'rgb(48,48,52)'
}

const thumbColor = {
  true: 'rgb(251,251,251)',
  false: 'rgb(251,251,251)',
}


const App = () => {
  const [value, setValue] = useState(false);
  return (
    <Switch
      onValueChange={val => setValue(val))}
      value={value}
      trackColor={trackColor}
      thumbColor={thumbColor}
    />
  )
}

```

## Switch Icon
The icon object supports a React component or an object with the following props

```js
{
  iconType: 'Ionicons', // React Native Vector Icon Font
  name: 'ios-lock-closed', // Icon name
  size: 19, //Icon size
  color: '#1c1c1e' // Icon Color
}
```
Example
```js
import React, { useState } from 'react'
import Switch from '@samcode/react-native-switch';

const trackColor = {
  true: 'rgb(74,164,144)',
  false: 'rgb(48,48,52)'
}

const thumbColor = {
  true: 'rgb(251,251,251)',
  false: 'rgb(251,251,251)',
}

const Icons = {
  true: { iconType: 'Ionicons', name: 'ios-lock-closed', size: 19, color: '#1c1c1e' },
  false: { iconType: 'Ionicons', name: 'ios-lock-open', size: 19, color: '#1c1c1e' }
}


const App = () => {
  const [value, setValue] = useState(false);
  return (
    <Switch
      onValueChange={val => setValue(val))}
      value={value}
      trackColor={trackColor}
      thumbColor={thumbColor}
    />
  )
}
```

Or using a SVG icon as a React Component

```javascript
// icons/like.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from 'styles';
import { SVGIconProps } from './icon-props';

const LikeIcon = (props) => {
  const {
    color,
    width,
    height,
    fillColor,
  } = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      {...props}
    >
      <Path
        d="M13 21.233C31.385 9.486 19.27-.027 13 6.416 6.73-.027-5.385 9.485 13 21.233z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fillColor}
      />
    </Svg>
  );
}

export default LikeIcon;

```

```js
import React, { useState } from 'react'
import Switch from '@samcode/react-native-switch';
import LikeIcon from './icons/like';

const trackColor = {
  true: 'rgb(74,164,144)',
  false: 'rgb(48,48,52)'
}

const thumbColor = {
  true: 'rgb(251,251,251)',
  false: 'rgb(251,251,251)',
}

const Icons = {
  true: <LikeIcon />,
  false: { iconType: 'Ionicons', name: 'ios-lock-open', size: 19, color: '#1c1c1e' }
}


const App = () => {
  const [value, setValue] = useState(false);
  return (
    <Switch
      onValueChange={val => setValue(val))}
      value={value}
      trackColor={trackColor}
      thumbColor={thumbColor}
      icons={Icons}
    />
  )
}
```


## Props

| Prop               | Description                          | Type     | Default                                                   |
| :----------------- | :----------------------------------- | :------- | :-------------------------------------------------------- |
| value              | The value to be represented          | Boolean  | false                                                     |
| disabled           | Defines if user can interact         | Boolean  | false                                                     |
| onValueChange      | Change value callback                | Function | -                                                         |
| icons               | The icons to be displayed            | Object or Component   | -                       |
| trackColor         | The colors of the track              | Object   | {true: "rgb(144, 195, 240)", false: "rgb(187, 194, 204)"} |
| thumbColor         | The colors of the thumb              | Object   | {true: "rgb(52, 149, 235)", false: "rgb(255, 255, 255)"}  |
| disabledThumbColor | The color of the thumb when disabled | String   | "#9499AD"                                                 |
| disabledTrackColor | The color of the track when disabled | String   | "#BCBFC9"                                                 |
| disabledIconColor  | The color of the icon when disabled  | String   | "#FFFFFF"                                                 |
| animationDuration  | The duration of the animation        | Number   | 200                                                       |

## Contributing

Pull requests are welcome.