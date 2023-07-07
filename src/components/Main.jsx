import React from 'react';
import { Text, View } from 'react-native';
import CharList from './CharactersList';
import Constants from 'expo-constants';

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <CharList />
    </View>
  );
};

export default Main;
