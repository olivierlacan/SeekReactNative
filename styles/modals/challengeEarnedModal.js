import { StyleSheet } from "react-native";
import {
  colors,
  fonts,
  dimensions
} from "../global";

export default StyleSheet.create( {
  banner: {
    bottom: 20,
    height: 48,
    paddingTop: 10,
    position: "absolute",
    width: 284,
    zIndex: 1
  },
  bannerText: {
    color: colors.white,
    fontFamily: fonts.semibold,
    fontSize: 15,
    letterSpacing: 0.42,
    lineHeight: 34,
    textAlign: "center"
  },
  header: {
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: "100%"
  },
  headerText: {
    color: colors.seekForestGreen,
    fontFamily: fonts.semibold,
    fontSize: dimensions.width < 350 ? 16 : 18,
    letterSpacing: 1.0,
    lineHeight: dimensions.width < 350 ? 18 : 24,
    marginHorizontal: 24,
    marginTop: 24,
    textAlign: "center"
  },
  image: {
    height: dimensions.width < 350 ? 140 : 158,
    marginBottom: 35,
    marginTop: 25,
    width: 140
  },
  logo: {
    height: 70,
    resizeMode: "contain",
    width: 209
  },
  marginBottom: {
    marginBottom: dimensions.width < 350 ? 15 : 33
  },
  text: {
    color: colors.black,
    fontFamily: fonts.book,
    fontSize: dimensions.width < 350 ? 14 : 16,
    lineHeight: dimensions.width < 350 ? 18 : 21,
    marginBottom: 15,
    marginHorizontal: 24,
    marginTop: dimensions.width < 350 ? 12 : 18,
    textAlign: "center"
  }
} );
