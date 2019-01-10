// @flow

import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "../../styles/locationPicker";
import { colors } from "../../styles/global";

const locationIcon = ( <Icon name="my-location" size={26} color={colors.seekiNatGreen} /> );

type Props = {
  region: Object,
  onRegionChange: Function,
  returnToUserLocation: Function
}

const LocationMap = ( {
  region,
  onRegionChange,
  returnToUserLocation
}: Props ) => (
  <View style={{ flex: 1 }}>
    <MapView
      provider={PROVIDER_DEFAULT}
      style={styles.map}
      region={region}
      onRegionChangeComplete={region => onRegionChange( region )}
    />
    <View pointerEvents="none" style={styles.markerFixed}>
      <View style={styles.markerCircle} />
    </View>
    <View style={styles.userLocation}>
      <TouchableHighlight
        onPress={() => returnToUserLocation()}
        style={styles.locationIcon}
      >
        <Text>{locationIcon}</Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default LocationMap;
