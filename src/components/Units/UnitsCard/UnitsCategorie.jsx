import { StyleSheet, Text, View } from 'react-native';
import StylesText from '../../TextStyles';
import theme from '../../../theme';

const UnitsCategories = (data) => {
  const { categories, alignment } = data;
  const wordsArray = categories?.join('|').split('|');

  const allData = wordsArray?.map((category) => ({ category }));

  const styles = StyleSheet.create({
    container: {
      width: 240,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    containerData: {
      backgroundColor: theme.colors.backgroundFilterOp,
      marginRight: 3,
      marginBottom: 4,
      borderRadius: 3,
      paddingLeft: 7,
    },
    categoryContainer: {
      marginRight: 7,
      color: theme.colors.textSecundary,
    },
    alignmentContainter: {
      marginRight: 6,
      fontWeight: 700,
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1.5 },
      textShadowRadius: 1,
      color:
        data.alignment === 3
          ? theme.colors.darkSide
          : data.alignment === 2
          ? theme.colors.lightSide
          : 'white',
    },
  });

  return (
    <View>
      <View style={styles.container}>
        {[alignment]?.map((data, index) => (
          <View style={styles.containerData} key={index}>
            <Text style={styles.alignmentContainter}>
              {data === 3 ? 'Dark Side' : data === 2 ? 'Light Side' : 'Neutral'}
            </Text>
          </View>
        ))}
        {allData.map((data, index) => (
          <View style={styles.containerData} key={index}>
            <StylesText key={index} style={styles.categoryContainer}>
              {data.category}
            </StylesText>
          </View>
        ))}
      </View>
    </View>
  );
};

export default UnitsCategories;
