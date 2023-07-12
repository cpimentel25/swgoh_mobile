import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import StylesText from './TextStyles';
import Constants from 'expo-constants';
import theme from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterName } from '../app/redux/slice';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.colors.textPrimary,
  },
});

const AppBar = () => {
  const [textInput, setTextInput] = useState('');

  const filterName = useSelector((state) => state.swgohReducer.filterName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterName(textInput));
  }, [textInput]);

  return (
    <View style={styles.container}>
      <StylesText blod style={styles.text}>
        SWGOH App
      </StylesText>
      <TextInput
        style={{ color: 'white' }}
        placeholder='Name'
        defaultValue={textInput}
        onChangeText={(newText) => setTextInput(newText)}
      />
    </View>
  );
};

export default AppBar;
