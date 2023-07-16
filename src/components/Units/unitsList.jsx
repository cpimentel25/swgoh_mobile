import React from 'react';
import { View, StyleSheet } from 'react-native';
import StylesText from '../TextStyles';
import theme from '../../theme';
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
        <View>
          <StylesText heading bold titleTwo>
            {data.name}
          </StylesText>
          <UnitsCategories {...data} />
          {/* <StylesText>{data.description}</StylesText> */}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  dataCard: {
    // width: '100%',
    backgroundColor: theme.colors.backgroundInsideCard,
    borderWidth: 1,
    borderTopEndRadius: 10,
    borderBottomWidth: 4,
    borderEndWidth: 4,
  },
  borderCardLightSide: {
    // borderColor: theme.colors.borderCardLightSide,
  },
  borderCardDarkSide: {
    // borderColor: theme.colors.borderCardDarkSide,
  },
  borderCardNeutralSide: {
    borderColor: theme.colors.borderCardNeutralSide,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 15,
    paddingBottom: 5,
    paddingTop: 5,
    marginVertical: 0,
    marginHorizontal: 0,
  },
});

export default SwgohItem;
