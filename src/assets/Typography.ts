import fonts from './Fonts';

type Underline = 'underline';

const typography = {
  bold: {
    display: {
      fontSize: 57.33,
      fontFamily: fonts.bold700,
    },
    heading01: {
      fontSize: 47.78,
      fontFamily: fonts.bold700,
    },
    heading02: {
      fontSize: 39.81,
      fontFamily: fonts.bold700,
    },
    heading03: {
      fontSize: 33.18,
      fontFamily: fonts.bold700,
    },
    heading04: {
      fontSize: 27.65,
      fontFamily: fonts.bold700,
    },
    heading05: {
      fontSize: 23.04,
      fontFamily: fonts.bold700,
    },
    heading06: {
      fontSize: 19.2,
      fontFamily: fonts.bold700,
    },
    subHeading: {
      fontSize: 16,
      fontFamily: fonts.bold700,
    },
    caption: {
      fontSize: 16,
      letterSpacing: 0.5,
      fontFamily: fonts.bold700,
    },
  },
  semiBold: {
    display: {
      fontSize: 57.33,
      fontFamily: fonts.semiBold600,
    },
    heading01: {
      fontSize: 47.78,
      fontFamily: fonts.semiBold600,
    },
    heading02: {
      fontSize: 39.81,
      fontFamily: fonts.semiBold600,
    },
    heading03: {
      fontSize: 33.18,
      fontFamily: fonts.semiBold600,
    },
    heading04: {
      fontSize: 27.65,
      fontFamily: fonts.semiBold600,
    },
    heading05: {
      fontSize: 23.04,
      fontFamily: fonts.semiBold600,
    },
    heading06: {
      fontSize: 19.2,
      fontFamily: fonts.semiBold600,
    },
    subHeading: {
      fontSize: 16,
      fontFamily: fonts.semiBold600,
    },
    caption: {
      fontSize: 16,
      letterSpacing: 0.5,
      fontFamily: fonts.semiBold600,
    },
    paragraphNormal: {
      fontSize: 16,
      fontFamily: fonts.semiBold600,
    },
    paragraphMid: {
      fontSize: 13.3,
      fontFamily: fonts.semiBold600,
    },
    paragraphSmall: {
      fontSize: 11.1,
      fontFamily: fonts.semiBold600,
    },
    footer: {
      fontSize: 9.3,
      fontFamily: fonts.semiBold600,
    },
  },
  regular: {
    display: {
      fontSize: 57.33,
      fontFamily: fonts.regular400,
    },
    heading01: {
      fontSize: 47.78,
      fontFamily: fonts.regular400,
    },
    heading02: {
      fontSize: 39.81,
      fontFamily: fonts.regular400,
    },
    heading03: {
      fontSize: 33.18,
      fontFamily: fonts.regular400,
    },
    heading04: {
      fontSize: 27.65,
      fontFamily: fonts.regular400,
    },
    heading05: {
      fontSize: 23.04,
      fontFamily: fonts.regular400,
    },
    heading06: {
      fontSize: 19.2,
      fontFamily: fonts.regular400,
    },
    subHeading: {
      fontSize: 16,
      fontFamily: fonts.regular400,
    },
    caption: {
      fontSize: 16,
      letterSpacing: 0.5,
      fontFamily: fonts.regular400,
    },
    paragraphNormal: {
      fontSize: 16,
      fontFamily: fonts.regular400,
    },
    paragraphMid: {
      fontSize: 13.3,
      fontFamily: fonts.regular400,
    },
    paragraphSmall: {
      fontSize: 11.1,
      fontFamily: fonts.regular400,
    },
    footer: {
      fontSize: 9.3,
      fontFamily: fonts.regular400,
    },
  },
  medium: {
    paragraphNormal: {
      fontSize: 16,
      fontFamily: fonts.medium500,
    },
    paragraphMid: {
      fontSize: 13.3,
      fontFamily: fonts.medium500,
    },
    paragraphSmall: {
      fontSize: 11.1,
      fontFamily: fonts.medium500,
    },
    footer: {
      fontSize: 9.3,
      fontFamily: fonts.medium500,
    },
  },
  underline: {
    subHeading: {
      fontSize: 16,
      fontFamily: fonts.regular400,
      textDecorationLine: 'underline' as Underline,
    },
    caption: {
      fontSize: 16,
      letterSpacing: 0.5,
      fontFamily: fonts.regular400,
      textDecorationLine: 'underline' as Underline,
    },
    paragraphNormal: {
      fontSize: 16,
      fontFamily: fonts.regular400,
      textDecorationLine: 'underline' as Underline,
    },
    paragraphMid: {
      fontSize: 13.3,
      fontFamily: fonts.medium500,
      textDecorationLine: 'underline' as Underline,
    },
    paragraphReg: {
      fontSize: 13.3,
      fontFamily: fonts.regular400,
      textDecorationLine: 'underline' as Underline,
    },
    paragraphMidSmall: {
      fontSize: 11.1,
      fontFamily: fonts.medium500,
      textDecorationLine: 'underline' as Underline,
    },
    paragraphRegSmall: {
      fontSize: 11.1,
      fontFamily: fonts.regular400,
      textDecorationStyle: 'underline' as Underline,
    },
    footer: {
      fontSize: 9.3,
      fontFamily: fonts.regular400,
    },
  },
  others: {
    passwordInput: {
      fontSize: 11.1,
      fontFamily: fonts.regular400,
      letterSpacing: 16,
    },
    paragraphInput: {
      fontSize: 11.1,
      fontFamily: fonts.regular400,
      lineHeight: 24,
    },
    link: {
      fontSize: 9.26,
      fontFamily: fonts.regular400,
    },
  },
};

export default typography;
