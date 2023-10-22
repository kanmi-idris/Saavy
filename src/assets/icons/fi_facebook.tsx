import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Facebook(props: any) {
  const {
    width = 16,
    height = 17,
    viewBox = '0 0 16 17',
    fill = 'none',
    stroke = 'black',
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <Path
        d="M12 1.8125H10C9.11594 1.8125 8.2681 2.16369 7.64297 2.78881C7.01785 3.41393 6.66666 4.26178 6.66666 5.14583V7.14583H4.66666V9.8125H6.66666V15.1458H9.33333V9.8125H11.3333L12 7.14583H9.33333V5.14583C9.33333 4.96902 9.40357 4.79945 9.52859 4.67443C9.65362 4.5494 9.82319 4.47917 10 4.47917H12V1.8125Z"
        stroke={stroke}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
