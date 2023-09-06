import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function ThumbsDown(props: any) {
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
      <G id="fi:thumbs-down">
        <Path
          d="M11.3333 1.33325H13.1133C13.4906 1.32658 13.8573 1.45867 14.1436 1.70446C14.4299 1.95025 14.6161 2.29262 14.6667 2.66658V7.33325C14.6161 7.70721 14.4299 8.04958 14.1436 8.29537C13.8573 8.54116 13.4906 8.67325 13.1133 8.66658H11.3333M6.66666 9.99991V12.6666C6.66666 13.197 6.87737 13.7057 7.25244 14.0808C7.62752 14.4559 8.13622 14.6666 8.66666 14.6666L11.3333 8.66658V1.33325H3.81332C3.49177 1.32961 3.17974 1.44231 2.93472 1.65058C2.6897 1.85884 2.52821 2.14864 2.47999 2.46658L1.55999 8.46658C1.53098 8.65768 1.54387 8.85279 1.59776 9.03841C1.65165 9.22403 1.74525 9.39572 1.87208 9.54157C1.99891 9.68743 2.15594 9.80396 2.33228 9.8831C2.50861 9.96225 2.70005 10.0021 2.89332 9.99991H6.66666Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </G>
    </Svg>
  );
}
