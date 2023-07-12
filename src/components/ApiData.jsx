import React from 'react';
import { View, StyleSheet } from 'react-native';
import StylesText from './TextStyles';
import theme from '../theme';
import UnitsHeader from './UnitsHeader';
import UnitsCategories from './UnitsCategorie';

const SwgohItem = ({ data }) => {
  const borderStyles = [
    style.container,
    style.dataCard,
    data.alignment === 2
      ? style.borderCardLightSide
      : data.alignment === 3
      ? style.borderCardDarkSide
      : style.borderCardNeutralSide,
  ];

  return (
    <View key={data.base_id} style={style.container}>
      <View style={borderStyles}>
        <UnitsHeader {...data} />
        <View style={{ alignItems: 'center' }}>
          <StylesText heading bold titleTwo>
            {data.name}
          </StylesText>
          <StylesText>{data.description}</StylesText>
        </View>
        <UnitsCategories {...data} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: 10,
          }}
        >
          <StylesText bold>Activate shards</StylesText>
          <StylesText>{data.activate_shard_count}</StylesText>
          <StylesText bold>Release</StylesText>
          <StylesText>{data.made_available_on}</StylesText>
        </View>
        {data.ship_base_id ? (
          <StylesText>ship: {data.ship_base_id}</StylesText>
        ) : null}
        {data.is_capital_ship ? (
          <StylesText>is capital ship: {data.is_capital_ship}</StylesText>
        ) : null}
        {data.crew_base_ids.length > 0 ? (
          <StylesText>crew base ids: {data.crew_base_ids}</StylesText>
        ) : null}
        {/* <StylesText>base_id: {data.base_id}</StylesText> */}
        {/* <StylesText>Combat type: {data.combat_type}</StylesText> */}
        {/* <StylesText>Alignment :{data.alignment}</StylesText> */}
        {/* <StylesText>Ability classes: {data.ability_classes}</StylesText> */}
        {/* <StylesText>Ship slot: {data.ship_slot}</StylesText> */}
        {/* <StylesText>is galactic legend: {data.is_galactic_legend}</StylesText> */}
        {/* <StylesText>omicron ability ids: {data.omicron_ability_ids}</StylesText> */}
        {/* <StylesText>zeta ability ids: {data.zeta_ability_ids}</StylesText> */}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  dataCard: {
    backgroundColor: theme.colors.backgroundInsideCard,
    borderWidth: 1,
    borderTopEndRadius: 10,
    borderBottomWidth: 4,
    borderEndWidth: 4,
  },
  borderCardLightSide: {
    borderColor: theme.colors.borderCardLightSide,
  },
  borderCardDarkSide: {
    borderColor: theme.colors.borderCardDarkSide,
  },
  borderCardNeutralSide: {
    borderColor: theme.colors.borderCardNeutralSide,
  },
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    marginVertical: 0,
    marginHorizontal: 0,
  },
});

export default SwgohItem;
