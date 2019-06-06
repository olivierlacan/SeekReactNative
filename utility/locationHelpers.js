import { Alert } from "react-native";
import Geocoder from "react-native-geocoder";
import OpenSettings from "react-native-open-settings";

import i18n from "../i18n";

const fetchUserLocation = () => (
  new Promise( ( resolve ) => {
    navigator.geolocation.getCurrentPosition( ( { coords } ) => {
      resolve( coords );
    } ).catch( () => {
      resolve( null );
    } );
  } )
);

const truncateCoordinates = ( coordinate ) => {
  if ( !coordinate ) {
    return null;
  }
  return Number( coordinate.toFixed( 2 ) );
};

const fetchTruncatedUserLocation = () => (
  new Promise( ( resolve ) => {
    navigator.geolocation.getCurrentPosition( ( { coords } ) => {
      const latitude = truncateCoordinates( coords.latitude );
      const longitude = truncateCoordinates( coords.longitude );
      const truncatedCoords = {
        latitude,
        longitude
      };

      resolve( truncatedCoords );
    } ).catch( () => {
      resolve( null );
    } );
  } )
);

const fetchLocationName = ( lat, lng ) => (
  new Promise( ( resolve ) => {
    Geocoder.geocodePosition( { lat, lng } ).then( ( result ) => {
      if ( result.length === 0 ) {
        resolve( null );
      }
      const { locality, subAdminArea } = result[0];
      resolve( locality || subAdminArea );
    } ).catch( () => {
      resolve( null );
    } );
  } )
);

const createLocationPermissionsAlert = () => {
  Alert.alert(
    i18n.t( "results.enable_location" ),
    i18n.t( "results.error_location" ),
    [{
      text: i18n.t( "species_nearby.enable_location" ),
      onPress: () => OpenSettings.openSettings()
    },
    {
      text: i18n.t( "posting.ok" ),
      style: "default"
    }]
  );
};

export {
  truncateCoordinates,
  fetchUserLocation,
  fetchLocationName,
  fetchTruncatedUserLocation,
  createLocationPermissionsAlert
};
