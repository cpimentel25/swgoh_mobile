import { StyleSheet, View } from "react-native";
import StylesText from "../TextStyles";
import theme from "../../theme";

const UnitsCategories = (data) => {
  const { categories } = data;
  const wordsArray = categories.join('|').split('|');

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    containerWord: {
      marginRight: 10,
      color: theme.colors.textSecundary,
    },
  });

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={{ alignItems: 'center', marginBottom: 5, marginTop: 10 }}>
        <StylesText bold subHeading>
          Categories
        </StylesText>
      </View>
      <View style={styles.container}>
        {wordsArray.map((word, index) => (
          <StylesText key={index} style={styles.containerWord}>
            {word}
          </StylesText>
        ))}
      </View>
    </View>
  );
};

export default UnitsCategories;
