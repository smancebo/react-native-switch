import * as React from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import { VectorIconProps } from './components/icon';
import Thumb, {
  BoolWithComponent,
  BoolWithIconOrComponent,
  BoolWithIcons,
  IconComponent,
  ThumpIcon,
} from './components/thumb';
import Track from './components/track';
import { BoolWithString } from './types';

interface IProps {
  style?: ViewStyle;
  disabled?: boolean;
  disabledTrackColor?: string;
  trackColor?: BoolWithString;
  thumbColor?: BoolWithString;
  icons?: ThumpIcon;
  disabledIconColor?: string;
  disabledThumbColor?: string;
  value: boolean;
  animationDuration?: number;
  onValueChange?: (value: boolean) => void;
  thumbSize?: number;
  trackHeight?: number;
}

interface IState {
  pressIndicator: boolean;
}

export default class Switch extends React.Component<IProps, IState> {
  _animatedValue: Animated.Value;
  _animationDuration = this.props.animationDuration || 200;
  _maxAnimatedValue = 100;
  _minAnimatedValue = 0;
  _animatedRange = [this._minAnimatedValue, this._maxAnimatedValue];
  _listenerId: string;

  constructor(props: IProps) {
    super(props);

    this._animatedValue = new Animated.Value(
      props.value ? this._maxAnimatedValue : this._minAnimatedValue
    );
    this._listenerId = '';
    this.state = {
      pressIndicator: false,
    };
  }

  _handlePress = () => {
    this.setState({ pressIndicator: true });

    const value = !this.props.value;

    if (this.props.onValueChange) {
      this.props.onValueChange(value);
    }
  };

  state = {
    pressIndicator: false,
  };

  componentDidMount() {
    this._listenerId = this._animatedValue.addListener(({ value }) => {
      if (
        this.state.pressIndicator &&
        (value === this._minAnimatedValue || value === this._maxAnimatedValue)
      ) {
        this.setState({ pressIndicator: false });
      }
    });
  }

  componentWillUnmount() {
    this._animatedValue.removeListener(this._listenerId);
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.value !== prevProps.value || this.state.pressIndicator) {
      Animated.timing(this._animatedValue, {
        toValue: this.props.value
          ? this._maxAnimatedValue
          : this._minAnimatedValue,
        duration: this._animationDuration,
        useNativeDriver: false,
      }).start();
    }
  }

  render() {
    const {
      style = {},
      disabled,
      disabledTrackColor,
      trackColor,
      thumbColor,
      icons,
      disabledIconColor,
      disabledThumbColor,
      value,
      trackHeight = 26,
      thumbSize = 26,
    } = this.props;

    const { height = 26, width = 52 } = style;

    const { pressIndicator } = this.state;

    return (
      <View style={style}>
        <TouchableWithoutFeedback
          disabled={disabled}
          onPress={this._handlePress}
        >
          <View>
            <Track
              range={this._animatedRange}
              animatedValue={this._animatedValue}
              disabled={disabled}
              width={Number(width)}
              height={Number(trackHeight || height)}
              disabledColor={disabledTrackColor}
              colors={trackColor}
            />
            <Thumb
              range={this._animatedRange}
              animatedValue={this._animatedValue}
              pressIndicator={pressIndicator}
              size={Number(thumbSize || height)}
              value={!!value}
              disabled={disabled}
              colors={thumbColor}
              width={Number(width)}
              icons={icons}
              disabledColor={disabledThumbColor}
              disabledIconColor={disabledIconColor}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export { BoolWithIcons as SwitchIconsType };
export { BoolWithComponent as SwitchIconsComponentType };
export { BoolWithString as SwitchColorType };
export { BoolWithIconOrComponent as SwitchMultiIconType };
export { VectorIconProps as VectorIconType };
export { IconComponent as ComponentIconType };
