/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Animated, ViewStyle } from 'react-native';

import { styles } from '../styles';
import { BoolWithString, Indexable } from '../types';
import Icon, { VectorIconProps } from './icon';

export type IconComponent =
  | React.ComponentType<any>
  | React.ReactElement
  | null;

export type IconOrComponent = VectorIconProps | IconComponent;

export interface BoolWithIcons extends Indexable<VectorIconProps> {
  true: VectorIconProps;
  false: VectorIconProps;
}

export interface BoolWithComponent extends Indexable<IconComponent> {
  true: IconComponent;
  false: IconComponent;
}

export interface BoolWithIconOrComponent<T, K> extends Indexable<T | K> {
  true: T;
  false: K;
}

export type ThumpIcon =
  | BoolWithIcons
  | BoolWithComponent
  | BoolWithIconOrComponent<IconOrComponent, IconOrComponent>;

interface IProps {
  disabled?: boolean;
  range: number[];
  animatedValue: Animated.Value;
  width: number;
  size: number;
  value: boolean;
  colors?: BoolWithString;
  icons?: ThumpIcon;
  disabledIconColor?: string;
  disabledColor?: string;
  pressIndicator?: boolean;
  style?: ViewStyle;
}

function isVectorIcon(
  icon: VectorIconProps | IconComponent
): icon is VectorIconProps {
  return (icon as VectorIconProps).iconType !== undefined;
}

function getIconComponent(icons: ThumpIcon | undefined, value: string) {
  if (icons) {
    const icon = icons ? icons[value] : undefined;
    return icon;
  }
  return undefined;
}

function renderIcon(
  icon: VectorIconProps | IconComponent,
  disabled: boolean,
  disabledIconColor: string
) {
  if (isVectorIcon(icon)) {
    return (
      <Icon
        iconType={icon.iconType}
        size={icon.size}
        name={icon.name}
        color={disabled ? disabledIconColor : icon.color}
        style={styles.vectorIcon}
      />
    );
  }

  return icon;
}

export default class Thumb extends React.Component<IProps> {
  render() {
    const {
      disabled = false,
      range,
      animatedValue,
      width,
      size,
      value,
      icons,
      colors = {
        true: 'rgb(52, 149, 235)',
        false: 'rgb(255, 255, 255)',
      },
      disabledIconColor = '#FFFFFF',
      disabledColor = '#9499AD',
      style,
    } = this.props;

    const radius = Math.round(size / 2);
    const stringValue = value.toString();

    const color = disabled
      ? disabledColor
      : animatedValue.interpolate({
          inputRange: range,
          outputRange: [colors.false, colors.true],
        });

    const position = animatedValue.interpolate({
      inputRange: range,
      outputRange: [0, width - size],
    });

    const pressedIndicatorPosition = animatedValue.interpolate({
      inputRange: range,
      outputRange: [0 - radius, width - radius - size],
    });

    const icon = getIconComponent(icons, stringValue);

    return (
      <>
        {this.props.pressIndicator && (
          <Animated.View
            style={[
              styles.pressedIndicator,
              {
                backgroundColor: color,
                left: pressedIndicatorPosition,
                width: size * 2,
                borderRadius: size,
                top: 0 - radius,
                aspectRatio: 1,
              },
            ]}
          />
        )}
        <Animated.View
          style={[
            styles.thumb,
            {
              backgroundColor: color,
              left: position,
              width: size,
              borderRadius: radius,
              aspectRatio: 1,
              ...style,
            },
          ]}
        >
          {icon && (
            <>{renderIcon(icon, disabled, disabledIconColor)}</>
            // <Icon
            //   iconType={icon.iconType}
            //   size={icon.size}
            //   name={icon.name}
            //   color={disabled ? disabledIconColor : icon.color}
            //   style={styles.vectorIcon}
            // />
          )}
        </Animated.View>
      </>
    );
  }
}
