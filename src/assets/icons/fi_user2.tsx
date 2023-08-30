import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import colors from '../Colors';

export default function UserActive(props: any) {
  const {
    width = 25,
    height = 24,
    viewBox = '0 0 25 24',
    fill = colors.green_1,
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill="none">
      <G id="fi:user">
        <Path
          d="M20.5 21V19C20.5 17.9391 20.0786 16.9217 19.3284 16.1716C18.5783 15.4214 17.5609 15 16.5 15H8.5C7.43913 15 6.42172 15.4214 5.67157 16.1716C4.92143 16.9217 4.5 17.9391 4.5 19V21"
          fill={fill}
        />
        <Path
          d="M12.5 11C14.7091 11 16.5 9.20914 16.5 7C16.5 4.79086 14.7091 3 12.5 3C10.2909 3 8.5 4.79086 8.5 7C8.5 9.20914 10.2909 11 12.5 11Z"
          fill={fill}
        />
      </G>
    </Svg>
  );
}
