import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import colors from '../Colors';

export default function DisplayCardChart(props: any) {
  const {
    width = 104,
    height = 98,
    viewBox = '0 0 104 98',
    fill = colors.green_7,
    stroke = colors.green_7,
    pathFill = colors.link,
  } = props;

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill="none">
      <Path
        d="M102.687 1.91064L101.776 1.4968L102.043 0.910645H102.687V1.91064ZM97.109 14.1803L98.0193 14.5942L97.6149 15.4838L96.7162 15.1L97.109 14.1803ZM92.2616 12.1099L91.4615 11.51L91.9324 10.8818L92.6544 11.1902L92.2616 12.1099ZM84.7828 22.0858L85.583 22.6857L85.031 23.422L84.2515 22.933L84.7828 22.0858ZM81.1819 19.8271L80.4974 19.0981L81.0598 18.5701L81.7133 18.98L81.1819 19.8271ZM73.5647 26.9797L72.7108 26.4592L72.7814 26.3435L72.8802 26.2507L73.5647 26.9797ZM69.5483 33.5676L70.4021 34.0882L70.2073 34.4077L69.8506 34.5209L69.5483 33.5676ZM65.3934 34.8852L64.4549 34.54L64.6241 34.0801L65.0912 33.932L65.3934 34.8852ZM61.5156 45.4259L62.4541 45.7712L62.038 46.9021L61.0032 46.2846L61.5156 45.4259ZM55.8372 42.0378L55.3977 41.1396L55.8844 40.9015L56.3496 41.1791L55.8372 42.0378ZM48.9124 45.4259L49.3519 46.3241L48.5352 46.7237L48.0599 45.9486L48.9124 45.4259ZM44.7576 38.6497L43.885 38.1613L44.7183 36.6727L45.6101 38.127L44.7576 38.6497ZM39.9102 47.3082L40.7828 47.7967L40.6803 47.9798L40.5128 48.1062L39.9102 47.3082ZM34.9244 51.0727L35.5269 51.8707L34.8736 52.364L34.2611 51.821L34.9244 51.0727ZM28.5536 45.4259L27.8903 46.1742L27.7286 46.031L27.6405 45.8338L28.5536 45.4259ZM23.8447 34.8852L24.0093 33.8989L24.5388 33.9872L24.7577 34.4773L23.8447 34.8852ZM15.9504 33.5676L15.4679 32.6918L15.7723 32.5241L16.1151 32.5813L15.9504 33.5676ZM10.8261 36.391L9.8557 36.1495L9.96114 35.7259L10.3435 35.5152L10.8261 36.391ZM7.6407 49.1904L8.6111 49.4319L8.47927 49.9616L7.96241 50.1373L7.6407 49.1904ZM2.42258 52.0195C1.89965 52.1972 1.33171 51.9173 1.15403 51.3944C0.97636 50.8715 1.25624 50.3035 1.77917 50.1258L2.42258 52.0195ZM103.597 2.32449L98.0193 14.5942L96.1986 13.7665L101.776 1.4968L103.597 2.32449ZM96.7162 15.1L91.8688 13.0295L92.6544 11.1902L97.5018 13.2607L96.7162 15.1ZM93.0617 12.7097L85.583 22.6857L83.9827 21.486L91.4615 11.51L93.0617 12.7097ZM84.2515 22.933L80.6506 20.6743L81.7133 18.98L85.3142 21.2387L84.2515 22.933ZM81.8665 20.5561L74.2492 27.7087L72.8802 26.2507L80.4974 19.0981L81.8665 20.5561ZM74.4185 27.5003L70.4021 34.0882L68.6945 33.0471L72.7108 26.4592L74.4185 27.5003ZM69.8506 34.5209L65.6957 35.8384L65.0912 33.932L69.246 32.6144L69.8506 34.5209ZM66.3319 35.2305L62.4541 45.7712L60.577 45.0806L64.4549 34.54L66.3319 35.2305ZM61.0032 46.2846L55.3248 42.8966L56.3496 41.1791L62.0279 44.5671L61.0032 46.2846ZM56.2767 42.9361L49.3519 46.3241L48.473 44.5276L55.3977 41.1396L56.2767 42.9361ZM48.0599 45.9486L43.9051 39.1725L45.6101 38.127L49.7649 44.9032L48.0599 45.9486ZM45.6301 39.1382L40.7828 47.7967L39.0376 46.8197L43.885 38.1613L45.6301 39.1382ZM40.5128 48.1062L35.5269 51.8707L34.3218 50.2746L39.3076 46.5101L40.5128 48.1062ZM34.2611 51.821L27.8903 46.1742L29.2169 44.6775L35.5877 50.3243L34.2611 51.821ZM27.6405 45.8338L22.9317 35.2931L24.7577 34.4773L29.4666 45.018L27.6405 45.8338ZM23.6801 35.8716L15.7858 34.554L16.1151 32.5813L24.0093 33.8989L23.6801 35.8716ZM16.433 34.4435L11.3087 37.2669L10.3435 35.5152L15.4679 32.6918L16.433 34.4435ZM11.7965 36.6325L8.6111 49.4319L6.6703 48.9489L9.8557 36.1495L11.7965 36.6325ZM7.96241 50.1373L2.42258 52.0195L1.77917 50.1258L7.319 48.2436L7.96241 50.1373ZM102.687 0.910645H103.475V2.91064H102.687V0.910645Z"
        fill={fill}
      />
      <Path
        d="M0.49999 50.7937C0.49999 51.6269 1.1278 52.249 1.83837 52.249C2.54895 52.249 3.17676 51.6269 3.17676 50.7937C3.17676 49.9605 2.54895 49.3384 1.83837 49.3384C1.1278 49.3384 0.49999 49.9605 0.49999 50.7937Z"
        fill={pathFill}
        stroke={stroke}
      />
      <Path
        d="M96.97 13.8421L103.475 1.35205L104 98.0001H2.10126V50.4898L7.63297 48.62L10.8137 35.9055L15.9305 33.1008L23.8132 34.4097L28.5152 44.8805L34.8766 50.4898L39.8552 46.7502L44.6954 38.1492L48.8442 44.8805L55.7588 41.5148L61.4288 44.8805L65.301 34.4097L69.4498 33.1008L73.4603 26.5566L81.0664 19.4514L84.662 21.6952L92.1298 11.7853L96.97 13.8421Z"
        fill="url(#paint0_linear_1359_13486)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1359_13486"
          x1="70.1215"
          y1="4.98334"
          x2="32.2919"
          y2="72.0455"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#3E97FF" stopOpacity="0.22" />
          <Stop offset="1" stopColor="#3E97FF" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
