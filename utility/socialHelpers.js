import CameraRoll from "@react-native-community/cameraroll";
import Share from "react-native-share";
import { Platform, Alert, Image, PixelRatio } from "react-native";
import Marker from "react-native-image-marker";
import RNFS from "react-native-fs";

import i18n from "../i18n";
import backgrounds from "../assets/backgrounds";
import { colors, fonts, dimensions } from "../styles/global";

const shareToFacebook = async ( url ) => {
  // this shares to newsfeed, story, or profile photo on Android
  const shareOptions = {
    url,
    social: Share.Social.FACEBOOK
  };

  try {
    const share = await Share.shareSingle( shareOptions );
    return share;
  } catch ( e ) {
    if ( e.error.code === "ECOM.RNSHARE1" ) {
      Alert.alert(
        i18n.t( "social.error_title" ),
        i18n.t( "social.error" )
      );
    }
    console.log( "couldn't share to FB because: ", e );
  }
};

const saveToCameraRoll = async ( uri ) => {
  try {
    const savedPhotoUri = CameraRoll.save( uri, { type: "photo", album: "Seek" } );
    return savedPhotoUri;
  } catch ( e ) {
    Alert.alert(
      i18n.t( "social.error_title" ),
      `${i18n.t( "camera.error_save" )} ${e}`
    );
    console.log( "couldn't save photo because", e );
  }
};

const getAndroidCameraRollPath = async ( uri ) => {
  const { originalFilepath } = await RNFS.stat( uri );
  return "file://" + originalFilepath;
};

const placeCommonNameText = ( width, scale ) => width - scale * 142;

const placeScientificNameText = ( width, scale ) => width - scale * 85;

const xPosition = ( scale ) => scale * 208;

const setFontSize = ( scale ) => scale * 45;

const addTextToWatermark = async( userImage, text, position, width, height, scale ) => {
  const yPosition = ( ) => {
    if ( height !== width ) {
      return position === 1 ? height - 195 : height - 115;
    } else {
      return position === 1 ? placeCommonNameText( width, scale ) : placeScientificNameText( width, scale );
    }
  };

  const imageOptions = {
    src: userImage,
    text,
    X: xPosition( scale ), // left
    Y: yPosition( ), // top
    color: colors.white,
    fontName: position === 1 ? fonts.semibold : fonts.bookItalic,
    fontSize: setFontSize( scale ),
    scale: 1,
    quality: 100
  };

  try {
    const path = await Marker.markText( imageOptions );
    const uri = Platform.OS === "android" ? "file://" + path : path;
    return uri;
  } catch ( e ) {
    return e;
  }
};

const getImageSize = ( uri ) => (
  new Promise( ( resolve, reject ) => {
    Image.getSize( uri, ( w, h ) => {
      resolve( { width: w, height: h } );
    }, ( ) => reject( null ) );
  } )
);

const setMarkerScale = ( scale, width, height ) => {
  // horizontal photos
  if ( height < width ) {
    return scale * 2;
  }

  // iPad and larger screens
  if ( dimensions.width > 500 ) {
    return scale * 1.5;
  }

  return scale;
};

const addWatermark = async( userImage, commonName, name ) => {
  // resized photos to 2048 * 2048 to be able to align watermark
  const { width, height } = await getImageSize( userImage );
  const originalPath = Platform.OS === "android" ? await getAndroidCameraRollPath( userImage ) : userImage;
  const scale = height === width ? 1.85 : 1.39;

  console.log( width, height, "height" );
  // vertical photos
  // iPad - how to scale marker
  // need to reset "saved" text

  console.log( scale, "scale", dimensions.width );

  const imageOptions = {
    src: originalPath,
    markerSrc: backgrounds.sharing,
    scale: 1, // scale of bg
    X: 0,
    markerScale: setMarkerScale( scale, width, height ), // scale of icon
    quality: 100, // quality of image
    saveFormat: "jpeg"
  };

  if ( height > width ) {
    imageOptions.Y = height - 255;
  } else {
    imageOptions.Y = height - 339;
  }

  try {
    const path = await Marker.markImage( imageOptions );
    const watermarkedImage = Platform.OS === "android" ? "file://" + path : path;
    const uriWithCommonName = await addTextToWatermark( watermarkedImage, commonName, 1, width, height, scale );
    const uriWithBothNames = await addTextToWatermark( uriWithCommonName, name, 2, width, height, scale );
    return uriWithBothNames;
  } catch ( e ) {
    return e;
  }
};

// adapted from https://stackoverflow.com/questions/50909390/react-native-how-to-get-file-asset-image-absolute-path
const getAssetFileAbsolutePath = async ( assetPath ) => {
  if ( Platform.OS === "android" ) { return assetPath; }
  const dest = `${RNFS.TemporaryDirectoryPath}${Math.random().toString( 36 ).substring( 7 )}.jpg`;

  try {
    let absolutePath = await RNFS.copyAssetsFileIOS( assetPath, dest, 0, 0 );
    return "file://" + absolutePath;
  } catch ( err ) {
    console.log( err );
  }
};

export {
  shareToFacebook,
  saveToCameraRoll,
  addWatermark,
  getAssetFileAbsolutePath,
  getImageSize
};
