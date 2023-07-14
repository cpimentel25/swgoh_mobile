import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setFilterName } from '../../app/redux/slice';
import Constants from 'expo-constants';
import theme from '../../theme';
import { Button } from '@rneui/base';
import { Icon } from '@rneui/themed';

const UnitsFilterBar = () => {
  const [textInput, setTextInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterName(textInput));
  }, [textInput]);

  return (
    <View style={style.container}>
      <View style={style.containerSearch}>
        <TextInput
          style={style.searchBar}
          placeholder='Name unit'
          placeholderTextColor='gray'
          value={textInput}
          onChangeText={(newText) => setTextInput(newText)}
        />
      </View>
      <View style={{ width: '30%' }}>
        <Button
          buttonStyle={{
            backgroundColor: theme.colors.yellow,
          }}
          containerStyle={{
            marginLeft: 10,
            borderColor: theme.colors.yellow,
            borderWidth: 3,
          }}
        >
          {/* <Icon name='filter' size={20} marginRight={5}/> */}
          <Text style={{ color: 'black', fontSize: 18 }}>Filters</Text>
        </Button>
      </View>
    </View>
  );
};

export default UnitsFilterBar;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: 'center',
  },
  containerSearch: {
    width: '70%',
    borderColor: theme.colors.yellow,
    borderWidth: 3,
  },
  searchBar: {
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    fontSize: 18,
  },
});
