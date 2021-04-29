import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

function Image(props: any) {
  const {
    width = 24.667,
    height = 18.5,
    color = 'blue',
  } = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 9.122c0-1.88 1.501-3.417 3.37-3.417h17.22c1.869 0 3.37 1.537 3.37 3.417v11.666c0 1.88-1.501 3.417-3.37 3.417H6.37c-1.869 0-3.37-1.537-3.37-3.417V9.122zm1 11.666v-.983l8.11-8.11 3.473 3.473a.5.5 0 00.707 0l2.517-2.516 7.153 7.153v.983c0 1.343-1.069 2.417-2.37 2.417H6.37c-1.301 0-2.37-1.074-2.37-2.417zm15.16-9.197l6.8 6.8v-9.27c0-1.342-1.069-2.416-2.37-2.416H6.37C5.069 6.705 4 7.78 4 9.122v9.269l7.756-7.756a.5.5 0 01.708 0l3.473 3.473 2.516-2.517a.5.5 0 01.707 0zm-1.788-2.038a1.435 1.435 0 11-2.87 0 1.435 1.435 0 012.87 0z"
        fill={color}
      />
    </Svg>
  );
}

export default Image;
