import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import colors from '../Colors';

export default function Home_2(props: any) {
  const {
    width = 25,
    height = 24,
    viewBox = '0 0 25 24',
    fill = colors.green_1,
    pathFill = colors.white,
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill="none">
      <G id="fi:home">
        <Path
          d="M3.5 9L12.5 2L21.5 9V20C21.5 20.5304 21.2893 21.0391 20.9142 21.4142C20.5391 21.7893 20.0304 22 19.5 22H5.5C4.96957 22 4.46086 21.7893 4.08579 21.4142C3.71071 21.0391 3.5 20.5304 3.5 20V9Z"
          fill={fill}
        />
        <Path d="M9.5 22V12H15.5V22" fill={pathFill} />
      </G>
    </Svg>
  );
}
