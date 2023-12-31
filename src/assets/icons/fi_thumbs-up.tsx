import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function ThumbsUp(props: any) {
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
      <G id="fi:thumbs-up">
        <Path
          d="M4.66668 14.6668H2.66668C2.31305 14.6668 1.97392 14.5264 1.72387 14.2763C1.47382 14.0263 1.33334 13.6871 1.33334 13.3335V8.66683C1.33334 8.31321 1.47382 7.97407 1.72387 7.72402C1.97392 7.47397 2.31305 7.3335 2.66668 7.3335H4.66668M9.33334 6.00016V3.3335C9.33334 2.80306 9.12263 2.29436 8.74756 1.91928C8.37248 1.54421 7.86378 1.3335 7.33334 1.3335L4.66668 7.3335V14.6668H12.1867C12.5082 14.6705 12.8203 14.5578 13.0653 14.3495C13.3103 14.1412 13.4718 13.8514 13.52 13.5335L14.44 7.5335C14.469 7.3424 14.4561 7.14728 14.4022 6.96166C14.3483 6.77604 14.2547 6.60436 14.1279 6.45851C14.0011 6.31265 13.8441 6.19612 13.6677 6.11697C13.4914 6.03783 13.2999 5.99797 13.1067 6.00016H9.33334Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </G>
    </Svg>
  );
}
