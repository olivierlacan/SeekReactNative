// @flow

import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Node } from "react";

import i18n from "../../../i18n";
import LocationMap from "../../Home/SpeciesNearby/LocationMap";
import { fetchUserLocation } from "../../../utility/locationHelpers";
import { viewStyles } from "../../../styles/home/locationPicker";
import { viewHeaderStyles, textStyles } from "../../../styles/uiComponents/greenHeader";
import icons from "../../../assets/icons";
import GreenButton from "../../UIComponents/Buttons/GreenButton";
import { dimensions } from "../../../styles/global";

const latitudeDelta = 0.005; // closer to zoom level on iNaturalist iOS app
const longitudeDelta = 0.005;

type Props = {
  +latitude: ?number,
  +longitude: ?number,
  +updateLocation: Function,
  +closeLocationPicker: Function
}

const LocationPicker = ( {
  latitude,
  longitude,
  updateLocation,
  closeLocationPicker
}: Props ): Node => {
  const [accuracy, setAccuracy] = useState( 90 );
  const [region, setRegion] = useState( {} );

  const handleRegionChange = ( newRegion ) => {
    const sizeOfCrossHairIcon = 127;
    const { width } = dimensions;

    const estimatedAccuracy = newRegion.longitudeDelta * 1000 * (
      ( sizeOfCrossHairIcon / width / 2 ) * 100
    );

    // $FlowFixMe
    setRegion( newRegion );
    setAccuracy( estimatedAccuracy );
  };

  const setCoords = ( coords ) => {
    if ( coords ) {
      const lat = coords.latitude;
      const long = coords.longitude;
      const newAccuracy = coords.accuracy;

      setRegion( {
        latitude: lat,
        longitude: long,
        latitudeDelta,
        longitudeDelta
      } );
      setAccuracy( newAccuracy );
    } else {
      setRegion( {
        latitude: 37.7749,
        longitude: -122.4194,
        latitudeDelta,
        longitudeDelta
      } );
    }
  };

  const returnToUserLocation = useCallback( () => {
    fetchUserLocation( true ).then( ( coords ) => {
      setCoords( coords );
    } ).catch( ( err ) => {
      if ( err ) {
        fetchUserLocation( false ).then( ( coords ) => {
          setCoords( coords );
        } ).catch( () => setCoords() );
      }
    } );
  }, [] );

  useEffect( () => {
    const setNewRegion = () => {
      setRegion( {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta
      } );
    };

    if ( latitude && longitude ) {
      // if photo has location, set map to that location
      setNewRegion();
    } else {
      // otherwise, set to user location
      returnToUserLocation();
    }
  }, [latitude, longitude, returnToUserLocation] );

  const handleLocationChange = ( ) => {
    updateLocation( region.latitude, region.longitude, accuracy );
    closeLocationPicker( );
  };

  const displayMap = ( ) => (
    <LocationMap
      onRegionChange={handleRegionChange}
      posting
      region={region}
      returnToUserLocation={returnToUserLocation}
    />
  );

  return (
    <SafeAreaView style={viewStyles.container} edges={["top"]}>
      <View style={[viewHeaderStyles.container, viewHeaderStyles.center]}>
        <TouchableOpacity
          accessibilityLabel={i18n.t( "accessibility.back" )}
          accessible
          onPress={closeLocationPicker}
          style={viewStyles.backButton}
        >
          <Image source={icons.backButton} />
        </TouchableOpacity>
        <Text style={textStyles.text}>{i18n.t( "posting.edit_location" ).toLocaleUpperCase()}</Text>
      </View>
      {region.latitude && displayMap( )}
      <View style={viewStyles.footer}>
        <GreenButton
          handlePress={handleLocationChange}
          text="posting.save_location"
        />
      </View>
    </SafeAreaView>
  );
};

export default LocationPicker;
