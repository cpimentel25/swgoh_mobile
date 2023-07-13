import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import ButtonOption from './buttonSelect';

const Main = () => {
  const options = ['Units', 'Ships', 'Stats', 'Guilds', 'News'];

  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        {options.map((op, index) => (
          <ButtonOption key={index} option={op.toUpperCase()} />
        ))}
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
  },
  containerButton: {
    // height: 400,
  },
});
