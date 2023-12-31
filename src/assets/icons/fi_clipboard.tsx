import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function Clipboard(props: any) {
  const {
    width = 16,
    height = 16,
    viewBox = '0 0 16 16',
    fill = 'none',
    stroke = 'black',
    strokeWidth = 2,
    strokeLinecap = 'round',
    strokeLinejoin = 'round',
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
      <G id="fi:clipboard">
        <Path
          d="M10.6667 2.6665H12C12.3536 2.6665 12.6928 2.80698 12.9428 3.05703C13.1929 3.30708 13.3334 3.64622 13.3334 3.99984V13.3332C13.3334 13.6868 13.1929 14.0259 12.9428 14.276C12.6928 14.526 12.3536 14.6665 12 14.6665H4.00002C3.6464 14.6665 3.30726 14.526 3.05721 14.276C2.80716 14.0259 2.66669 13.6868 2.66669 13.3332V3.99984C2.66669 3.64622 2.80716 3.30708 3.05721 3.05703C3.30726 2.80698 3.6464 2.6665 4.00002 2.6665H5.33335"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
        <Path
          d="M9.99998 1.3335H5.99998C5.63179 1.3335 5.33331 1.63197 5.33331 2.00016V3.3335C5.33331 3.70169 5.63179 4.00016 5.99998 4.00016H9.99998C10.3682 4.00016 10.6666 3.70169 10.6666 3.3335V2.00016C10.6666 1.63197 10.3682 1.3335 9.99998 1.3335Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </G>
    </Svg>
  );
}
