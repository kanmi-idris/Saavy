import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export default function Copy(props: any) {
  const {
    width = 12,
    height = 13,
    viewBox = '0 0 12 13',
    fill = 'none',
    stroke = 'black',
    strokeWidth = '1',
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <G clipPath="url(#clip0_570_6719)">
        <Path
          d="M10 4.97949H5.5C4.94772 4.97949 4.5 5.42721 4.5 5.97949V10.4795C4.5 11.0318 4.94772 11.4795 5.5 11.4795H10C10.5523 11.4795 11 11.0318 11 10.4795V5.97949C11 5.42721 10.5523 4.97949 10 4.97949Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
        <Path
          d="M2.5 7.97949H2C1.73478 7.97949 1.48043 7.87414 1.29289 7.6866C1.10536 7.49906 1 7.24471 1 6.97949V2.47949C1 2.21428 1.10536 1.95992 1.29289 1.77239C1.48043 1.58485 1.73478 1.47949 2 1.47949H6.5C6.76522 1.47949 7.01957 1.58485 7.20711 1.77239C7.39464 1.95992 7.5 2.21428 7.5 2.47949V2.97949"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_570_6719">
          <Rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0 0.479492)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
