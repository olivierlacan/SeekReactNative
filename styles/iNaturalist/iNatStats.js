// @flow

import { StyleSheet } from "react-native";
import {
  colors,
  fonts,
  center,
  dimensions,
  row
} from "../global";

import type { ViewStyleProp, TextStyleProp, ImageStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

const largeIconWidth = 94;
const smallIconWidth = 58;

const viewStyles: { [string]: ViewStyleProp } = StyleSheet.create( {
  center,
  textContainer: {
    marginHorizontal: 27
  },
  photoMargins: {
    marginVertical: 33
  },
  secondHeader: {
    marginTop: 23,
    marginBottom: 10
  },
  row,
  greenButtonMargins: {
    paddingTop: 17,
    paddingBottom: 42
  },
  sectionMargin: {
    marginTop: 33
  },
  smallSectionMargin: {
    marginTop: 7
  },
  linearGradient: {
    height: 225
  },
  loggedInHeaderMargin: {
    marginTop: 30 - 12
  },
  linearGradientTextContainer: {
    marginLeft: 16,
    marginVertical: 29
  }
} );

const textStyles: { [string]: TextStyleProp } = StyleSheet.create( {
  secondHeaderText: {
    marginLeft: 18,
    color: colors.black,
    fontFamily: fonts.medium,
    fontSize: 19,
    lineHeight: 24,
    width: dimensions.width - ( 27 * 2 ) - smallIconWidth - 18
  },
  smallerTextWidth: {
    width: dimensions.width - ( 27 * 2 ) - largeIconWidth - 26,
    marginLeft: 26
  },
  text: {
    color: colors.black,
    fontFamily: fonts.book,
    fontSize: 16,
    lineHeight: 21
  },
  caption: {
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    width: 245
  },
  loginLogoutText: {
    marginTop: 19,
    marginBottom: 33
  },
  everydayObs: {
    marginTop: 16
  },
  lightText: {
    color: colors.black,
    fontFamily: fonts.light,
    fontSize: 14,
    letterSpacing: 0.61,
    marginBottom: 2
  },
  loginNameText: {
    marginBottom: 6,
    marginTop: 11,
    color: colors.black,
    fontFamily: fonts.medium,
    fontSize: 19,
    lineHeight: 24,
    width: 195
  },
  whiteText: {
    color: colors.white,
    width: 195
  }
} );

const imageStyles: { [string]: ImageStyleProp } = StyleSheet.create( {
  image: {
    height: 286,
    resizeMode: "cover",
    width: dimensions.width
  },
  largeIcon: {
    width: largeIconWidth,
    height: largeIconWidth
  },
  smallIcon: {
    width: smallIconWidth,
    height: smallIconWidth
  }
} );

export {
  viewStyles,
  textStyles,
  imageStyles
};
