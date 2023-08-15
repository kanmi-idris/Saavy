import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function DollarIcon(props: any) {
  const {
    width = 24,
    height = 24,
    viewBox = '0 0 24 24',
    fill = 'none',
    stroke = 'black',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <Path
        d="M12.3902 10.9C10.1202 10.31 9.39016 9.7 9.39016 8.75C9.39016 7.66 10.4002 6.9 12.0902 6.9C13.8702 6.9 14.5302 7.75 14.5902 9H16.8002C16.7302 7.28 15.6802 5.7 13.5902 5.19V3H10.5902V5.16C8.65016 5.58 7.09016 6.84 7.09016 8.77C7.09016 11.08 9.00016 12.23 11.7902 12.9C14.2902 13.5 14.7902 14.38 14.7902 15.31C14.7902 16 14.3002 17.1 12.0902 17.1C10.0302 17.1 9.22016 16.18 9.11016 15H6.91016C7.03016 17.19 8.67016 18.42 10.5902 18.83V21H13.5902V18.85C15.5402 18.48 17.0902 17.35 17.0902 15.3C17.0902 12.46 14.6602 11.49 12.3902 10.9Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
