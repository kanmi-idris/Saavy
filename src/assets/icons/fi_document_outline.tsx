import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function DocumentOutline(props: any) {
  const {
    width = 24,
    height = 25,
    viewBox = '0 0 24 25',
    fill = 'none',
    stroke = 'black',
    strokeWidth = '2',
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <Path
        d="M12 10.4795V16.4795M12 16.4795L9 13.4795M12 16.4795L15 13.4795M17 21.4795H7C5.89543 21.4795 5 20.5841 5 19.4795V5.47949C5 4.37492 5.89543 3.47949 7 3.47949H12.5858C12.851 3.47949 13.1054 3.58485 13.2929 3.77239L18.7071 9.1866C18.8946 9.37414 19 9.62849 19 9.89371V19.4795C19 20.5841 18.1046 21.4795 17 21.4795Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="25"
  viewBox="0 0 24 25"
  fill="none">
  <path
    d=""
    stroke="#111827"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>;
