import React from 'react';
import { View } from 'react-native';
import CharList from './CharactersList';
import AppBar from './AppBar';
import theme from '../theme';

const Main = () => {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AppBar />
      <CharList />
    </View>
  );
};

export default Main;
