import React, { useEffect, useState } from 'react'
import Switch, {
  SwitchColorType,
  SwitchIconsType,
  SwitchMultiIconType,
  VectorIconType,
  ComponentIconType,
  SwitchIconsComponentType,
} from '@samcode/react-native-switch'
import { View, SafeAreaView } from 'react-native';
import AddImage from './icons/add-image';
import Bold from './icons/bold';


const App = () => {
  const [value, setValue] = useState(false);
  const [iconComponentValue, setIconComponentValue] = useState(false);
  const [mixedComponentValue, setMixedComponentValue] = useState(false);

  const vectorIcons: SwitchIconsType = {
    true: { iconType: 'Ionicons', name: 'ios-lock-closed', size: 19, color: '#1c1c1e' },
    false: { iconType: 'Ionicons', name: 'ios-lock-open', size: 19, color: '#1c1c1e' }
  }
  const componentIcons: SwitchIconsComponentType = {
    true: <Bold />,
    false: <AddImage />,
  }
  const mixedIcons: SwitchMultiIconType<VectorIconType, IconComponentType> = {
    true: { iconType: 'Ionicons', name: 'ios-lock-closed', size: 19, color: '#1c1c1e' },
    false: <AddImage />,
  }

  const trackColor: SwitchColorType = {
    true: 'rgb(74,164,144)',
    false: 'rgb(48,48,52)'
  }

  const thumbColor: SwitchColorType = {
    true: 'rgb(251,251,251)',
    false: 'rgb(251,251,251)',
  }

  return (
    <View>
      <SafeAreaView>
        <Switch
          value={value}
          onValueChange={(val) => setValue(val)}
          icons={vectorIcons} 
          style={{ height: 31, width: 61 }}
          trackColor={trackColor}
          thumbColor={thumbColor}
        />
        <Switch
          value={iconComponentValue}
          onValueChange={(val) => setIconComponentValue(val)}
          icons={componentIcons} 
          style={{ height: 31, width: 61 }}
          trackColor={trackColor}
          thumbColor={thumbColor}
        />
        <Switch
          value={mixedComponentValue}
          onValueChange={(val) => setMixedComponentValue(val)}
          icons={mixedIcons} 
          style={{ height: 31, width: 61 }}
          trackColor={trackColor}
          thumbColor={thumbColor}
        />
      </SafeAreaView>
    </View>
  )
}

export default App
