import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Bold = (props: any) => {
  const { color = '#1c1c1e' } = props;
  return (
    <Svg width={10.9} height={13} viewBox="0 0 10.9 13" {...props}>
      <Path
        data-name="Path 920"
        d="M10.9 9.2a3.744 3.744 0 01-1.07 2.68A4.328 4.328 0 016.56 13H0v-1.9h1.5V1.9H0V0h6.48a4.506 4.506 0 012.89.84 2.723 2.723 0 011.05 2.24A2.718 2.718 0 018.1 5.82v.08a3.152 3.152 0 012.1 1.12 3.444 3.444 0 01.7 2.18zM8.04 3.64a1.486 1.486 0 00-.59-1.38 2.861 2.861 0 00-1.51-.36H3.72v3.56H5.8a2.417 2.417 0 001.69-.51 1.706 1.706 0 00.55-1.31zm.48 5.48q0-1.92-2.2-1.92h-2.6v3.9h2.3q2.5 0 2.5-1.98z"
        fill={color}
      />
    </Svg>
  );
};

export default Bold;
