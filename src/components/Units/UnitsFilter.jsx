import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterName } from '../../app/redux/slice';
import Constants from 'expo-constants';
import theme from '../../theme';
import { Button } from '@rneui/base';

const UnitsFilterBar = ({ setFilterOp, filterOp }) => {
  const [textInput, setTextInput] = useState('');
  const filterListOp = useSelector((state) => state.swgohReducer.filterOptions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterName(textInput));
  }, [textInput]);

  return (
    <>
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
            onPress={() => setFilterOp(!filterOp)}
          >
            <Text style={{ color: 'black', fontSize: 18 }}>Filters</Text>
          </Button>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          // height: 100,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text style={style.textOp}>FILTER OPTIONS:</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {filterListOp?.map((op) => (
            <View style={style.containerFilterOp}>
              <Text style={style.textFilterOp}>
                {op
                  .replace(/([A-Z])/g, ' $1')
                  .toUpperCase()
                  .trim()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </>
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
  textOp: {
    height: 22,
    marginBottom: 7,
    color: theme.colors.yellow,
    fontSize: 18,
    fontWeight: 700,
  },
  containerFilterOp: {
    backgroundColor: theme.colors.backgroundFilterOp,
    margin: 3,
    marginBottom: 5,
    borderRadius: 5,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 5,
    paddingTop: 5,
  },
  textFilterOp: {
    color: 'white',
    fontSize: 13,
  },
});
