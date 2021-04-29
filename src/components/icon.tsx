import * as React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

const VectorIcons = {
  MaterialIcons,
  EvilIcons,
  Entypo,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  Zocial,
  Octicons,
  SimpleLineIcons,
  AntDesign,
  Feather,
};

export interface VectorIconProps {
  iconType:
    | 'MaterialIcons'
    | 'EvilIcons'
    | 'Entypo'
    | 'FontAwesome'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'Zocial'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'AntDesign'
    | 'Feather';
  name: string;
  size: number;
  color?: string;
}

interface IconStyleProps {
  style?: object;
}

const Icon = (props: VectorIconProps & IconStyleProps) => {
  const { iconType = 'Ionicons', name, size, color, style } = props;

  const VectorIcon = VectorIcons[iconType];
  return (
    <VectorIcon
      name={name}
      size={size}
      color={color}
      style={{ width: size, height: size, ...style }}
    />
  );
};

export { VectorIcons as VectorIconsTypes };

export default Icon;
