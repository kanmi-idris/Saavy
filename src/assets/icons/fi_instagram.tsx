import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Instagram(props: any) {
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
        d="M11.3333 1.8125H4.66667C2.82572 1.8125 1.33334 3.30488 1.33334 5.14583V11.8125C1.33334 13.6535 2.82572 15.1458 4.66667 15.1458H11.3333C13.1743 15.1458 14.6667 13.6535 14.6667 11.8125V5.14583C14.6667 3.30488 13.1743 1.8125 11.3333 1.8125Z"
        stroke={stroke}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <Path
        d="M10.6667 8.05969C10.7489 8.61452 10.6542 9.18117 10.3958 9.67904C10.1375 10.1769 9.72876 10.5806 9.22775 10.8328C8.72674 11.085 8.15897 11.1728 7.60519 11.0836C7.05142 10.9945 6.53984 10.7331 6.14323 10.3365C5.74661 9.93985 5.48516 9.42828 5.39605 8.8745C5.30694 8.32073 5.39471 7.75296 5.64688 7.25194C5.89906 6.75093 6.30279 6.34219 6.80066 6.08385C7.29852 5.82552 7.86517 5.73075 8.42 5.81303C8.98595 5.89695 9.5099 6.16067 9.91446 6.56523C10.319 6.96979 10.5827 7.49374 10.6667 8.05969Z"
        stroke={stroke}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
      <Path
        d="M11.6667 4.8125H11.6733"
        stroke={stroke}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
