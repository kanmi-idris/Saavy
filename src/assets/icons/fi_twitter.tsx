import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Twitter(props: any) {
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
        d="M15.3333 2.47936C14.6949 2.92968 13.9881 3.2741 13.24 3.49936C12.8385 3.0377 12.3049 2.71049 11.7114 2.56198C11.1178 2.41347 10.493 2.45082 9.92138 2.669C9.34977 2.88717 8.85896 3.27563 8.51532 3.78184C8.17168 4.28805 7.9918 4.88758 8 5.49936V6.16603C6.82842 6.19641 5.66751 5.93657 4.62067 5.40966C3.57383 4.88275 2.67354 4.10512 2 3.14603C2 3.14603 -0.666669 9.14603 5.33333 11.8127C3.96035 12.7447 2.32477 13.212 0.666664 13.146C6.66666 16.4794 14 13.146 14 5.47936C13.9994 5.29366 13.9815 5.10842 13.9467 4.92603C14.6271 4.25502 15.1072 3.40784 15.3333 2.47936V2.47936Z"
        stroke={stroke}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </Svg>
  );
}
