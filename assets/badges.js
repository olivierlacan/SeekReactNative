// @flow

const badges = {
  badge_empty: require( "./badges/Badge_Empty.webp" ),
  badge_empty_small: require( "./badges/observations/Badge_Empty.webp" ),
  "levelbadge-0": require( "./badges/naturalist/levelbadge-0.webp" ),
  "levelbadge-3": require( "./badges/naturalist/levelbadge-3.webp" ),
  "levelbadge-15": require( "./badges/naturalist/levelbadge-15.webp" ),
  "levelbadge-30": require( "./badges/naturalist/levelbadge-30.webp" ),
  "levelbadge-50": require( "./badges/naturalist/levelbadge-50.webp" ),
  "levelbadge-75": require( "./badges/naturalist/levelbadge-75.webp" ),
  "levelbadge-100": require( "./badges/naturalist/levelbadge-100.webp" ),
  "levelbadge-125": require( "./badges/naturalist/levelbadge-125.webp" ),
  "levelbadge-150": require( "./badges/naturalist/levelbadge-150.webp" ),
  badge_amphibian_1: require( "./badges/species/badge_amphibian_1.webp" ),
  badge_arachnid_1: require( "./badges/species/badge_arachnid_1.webp" ),
  badge_bird_1: require( "./badges/species/badge_bird_1.webp" ),
  badge_fish_1: require( "./badges/species/badge_fish_1.webp" ),
  badge_fungi_1: require( "./badges/species/badge_fungi_1.webp" ),
  badge_insect_1: require( "./badges/species/badge_insect_1.webp" ),
  badge_mammal_1: require( "./badges/species/badge_mammal_1.webp" ),
  badge_mollusk_1: require( "./badges/species/badge_mollusk_1.webp" ),
  badge_plant_1: require( "./badges/species/badge_plant_1.webp" ),
  badge_reptile_1: require( "./badges/species/badge_reptile_1.webp" ),
  badge_amphibian_2: require( "./badges/species/badge_amphibian_2.webp" ),
  badge_arachnid_2: require( "./badges/species/badge_arachnid_2.webp" ),
  badge_bird_2: require( "./badges/species/badge_bird_2.webp" ),
  badge_fish_2: require( "./badges/species/badge_fish_2.webp" ),
  badge_fungi_2: require( "./badges/species/badge_fungi_2.webp" ),
  badge_insect_2: require( "./badges/species/badge_insect_2.webp" ),
  badge_mammal_2: require( "./badges/species/badge_mammal_2.webp" ),
  badge_mollusk_2: require( "./badges/species/badge_mollusk_2.webp" ),
  badge_plant_2: require( "./badges/species/badge_plant_2.webp" ),
  badge_reptile_2: require( "./badges/species/badge_reptile_2.webp" ),
  badge_amphibian_3: require( "./badges/species/badge_amphibian_3.webp" ),
  badge_arachnid_3: require( "./badges/species/badge_arachnid_3.webp" ),
  badge_bird_3: require( "./badges/species/badge_bird_3.webp" ),
  badge_fish_3: require( "./badges/species/badge_fish_3.webp" ),
  badge_fungi_3: require( "./badges/species/badge_fungi_3.webp" ),
  badge_insect_3: require( "./badges/species/badge_insect_3.webp" ),
  badge_mammal_3: require( "./badges/species/badge_mammal_3.webp" ),
  badge_mollusk_3: require( "./badges/species/badge_mollusk_3.webp" ),
  badge_plant_3: require( "./badges/species/badge_plant_3.webp" ),
  badge_reptile_3: require( "./badges/species/badge_reptile_3.webp" ),
  badge_ourplanet_april: require( "./badges/challenges/badge_ourplanet_april.webp" ),
  badge_ourplanet_may: require( "./badges/challenges/badge_ourplanet_may.webp" ),
  badge_ourplanet_june: require( "./badges/challenges/badge_ourplanet_june.webp" ),
  badge_ourplanet_august: require( "./badges/challenges/badge_ourplanet_august.webp" ),
  badge_ourplanet_september: require( "./badges/challenges/badge_ourplanet_september.webp" ),
  badge_ourplanet_october: require( "./badges/challenges/badge_ourplanet_october.webp" ),
  badge_ourplanet_november: require( "./badges/challenges/badge_ourplanet_november.webp" ),
  badge_ourplanet_december: require( "./badges/challenges/badge_ourplanet_december.webp" ),
  badge_gold: require( "./badges/observations/icon-badge-gold.webp" ),
  badge_inaturalist_april2020: require( "./badges/seekChallenges/badge_inaturalist_april2020.webp" ),
  badge_inaturalist_may2020: require( "./badges/seekChallenges/badge_inaturalist_may2020.webp" ),
  badge_inaturalist_june2020: require( "./badges/seekChallenges/badge_inaturalist_june2020.webp" ),
  badge_inaturalist_july2020: require( "./badges/seekChallenges/badge_inaturalist_july2020.webp" ),
  badge_inaturalist_august2020: require( "./badges/seekChallenges/badge_inaturalist_august2020.webp" ),
  badge_inaturalist_september2020: require( "./badges/seekChallenges/badge_inaturalist_september2020.webp" ),
  badge_inaturalist_october2020: require( "./badges/seekChallenges/badge_inaturalist_october2020.webp" ),
  badge_inaturalist_november2020: require( "./badges/seekChallenges/badge_inaturalist_november2020.webp" ),
  badge_inaturalist_december2020: require( "./badges/seekChallenges/badge_inaturalist_december2020.webp" ),
  badge_natgeo_march2021: require( "./badges/natGeoChallenges/badge_natgeo_march2021.webp" ),
  badge_natgeo_april2021: require( "./badges/natGeoChallenges/badge_natgeo_april2021.webp" ),
  badge_natgeo_may2021: require( "./badges/natGeoChallenges/badge_natgeo_may2021.webp" ),
  badge_natgeo_june2021: require( "./badges/natGeoChallenges/badge_natgeo_june2021.webp" ),
  badge_inaturalist_august2021: require( "./badges/seekChallenges/badge_inaturalist_august2021.webp" ),
  badge_inaturalist_september2021: require( "./badges/seekChallenges/badge_inaturalist_september2021.webp" ),
  badge_inaturalist_october2021: require( "./badges/seekChallenges/badge_inaturalist_october2021.webp" ),
  badge_inaturalist_november2021: require( "./badges/seekChallenges/badge_inaturalist_november2021.webp" ),
  badge_inaturalist_december2021: require( "./badges/seekChallenges/badge_inaturalist_december2021.webp" ),
  badge_inaturalist_january2022: require( "./badges/seekChallenges/badge_inaturalist_january2022.webp" ),
  badge_inaturalist_february2022: require( "./badges/seekChallenges/badge_inaturalist_february2022.webp" ),
  badge_inaturalist_march2022: require( "./badges/seekChallenges/badge_inaturalist_march2022.webp" )
};

export default badges;
