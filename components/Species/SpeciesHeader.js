import React, { useCallback } from "react";
import { Text, BackHandler } from "react-native";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";

import i18n from "../../i18n";
import iconicTaxaNames from "../../utility/dictionaries/iconicTaxonDict";
import SpeciesPhotos from "./SpeciesPhotos";
import styles from "../../styles/species/species";
import { useCommonName } from "../../utility/customHooks";
import { getRoute } from "../../utility/helpers";
import CustomBackArrow from "../../components/UIComponents/Buttons/CustomBackArrow";

type Props = {
  photos: Array<Object>,
  taxon: Object,
  id: number
}

const SpeciesHeader = ( { photos, taxon, id }: Props ) => {
  const navigation = useNavigation( );
  const { params } = useRoute();
  const commonName = useCommonName( id );

  const { scientificName, iconicTaxonId } = taxon;

  const backAction = useCallback( async () => {
    const { navigate } = navigation;
    const routeName = await getRoute();
    // would like to remove these so we're not duplicating the work of the navigator here
    // originally this was for similar species
    if ( routeName === "ChallengeDetails" || routeName === "Observations" || routeName === "Match" ) {
      navigation.goBack( );
    }
    if ( routeName ) {
      navigate( routeName, { ...params } );
    } else {
      navigate( "Home" );
    }
  }, [params, navigation] );

  useFocusEffect(
    useCallback( () => {
      const onBackPress = () => {
        backAction();
        return true; // following custom Android back behavior template in React Navigation
      };

      BackHandler.addEventListener( "hardwareBackPress", onBackPress );

      return () => BackHandler.removeEventListener( "hardwareBackPress", onBackPress );
    }, [backAction] )
  );

  return (
    <>
      <CustomBackArrow handlePress={backAction} style={styles.backButton} />
      <SpeciesPhotos photos={photos} id={id} />
      {iconicTaxonId && (
        <Text style={styles.iconicTaxaText}>
          {i18n.t( iconicTaxaNames[iconicTaxonId] ).toLocaleUpperCase()}
        </Text>
      )}
      <Text style={styles.commonNameText}>{commonName || scientificName}</Text>
      <Text style={styles.scientificNameText}>{scientificName}</Text>
    </>
  );
};

export default SpeciesHeader;
