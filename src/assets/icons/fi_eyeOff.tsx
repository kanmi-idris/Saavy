import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function EyeOff(props: any) {
  const {
    width = 24,
    height = 24,
    viewBox = '0 0 24 24',
    fill = 'none',
    stroke = 'black',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
    pathFill = 'none',
    pathStroke = 'black',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <G id="fi:eye-off">
        <Path
          d="M6.59996 2.82676C7.05885 2.71935 7.52867 2.66566 7.99996 2.66676C12.6666 2.66676 15.3333 8.0001 15.3333 8.0001C14.9286 8.75717 14.446 9.46992 13.8933 10.1268M9.41329 9.41343C9.23019 9.60993 9.00939 9.76754 8.76406 9.87685C8.51873 9.98616 8.25389 10.0449 7.98535 10.0497C7.71681 10.0544 7.45007 10.005 7.20103 9.90443C6.952 9.80384 6.72577 9.65412 6.53586 9.4642C6.34594 9.27428 6.19622 9.04806 6.09563 8.79902C5.99504 8.54999 5.94564 8.28325 5.95038 8.0147C5.95512 7.74616 6.0139 7.48133 6.12321 7.236C6.23252 6.99067 6.39013 6.76986 6.58663 6.58677M11.96 11.9601C10.8204 12.8288 9.4327 13.31 7.99996 13.3334C3.33329 13.3334 0.666626 8.0001 0.666626 8.0001C1.49589 6.4547 2.64605 5.1045 4.03996 4.0401L11.96 11.9601Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
        <Path
          d="M0.666626 0.666748L15.3333 15.3334"
          fill={pathFill}
          stroke={pathStroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </G>
    </Svg>
  );
}
