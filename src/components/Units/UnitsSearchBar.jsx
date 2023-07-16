import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterName } from '../../app/redux/slice';
import { Button } from '@rneui/base';
import Constants from 'expo-constants';
import theme from '../../theme';
import useSwgohApi from '../hooks/apiSwgoh';

const UnitsFilterBar = ({ setFilterOp, filterOp }) => {
  const { apiSwgoh } = useSwgohApi();
  const [textInput, setTextInput] = useState('');
  const filterListOp = useSelector((state) => state.swgohReducer.filterOptions);
  const filterApply = useSelector((state) => state.swgohReducer.filterApply);
  const dispatch = useDispatch();

  const handleFilter = (data) => {
    // console.log('🚀 ~ UnitsSwgoh ~ categories:', data[1]?.categories);
    // console.log('🚀 ~ UnitsSwgoh ~ role:', data[2]?.role);

    const sideAlignment =
      data[0]?.alignment[0] === 'lightSide'
        ? 2
        : data[0]?.alignment[0] === 'darkSide'
        ? 3
        : data[0]?.alignment[0] === 'neutral'
        ? 1
        : [];

    if (data.length > 0) {
      const filterBySide = apiSwgoh.filter(
        (item) => item.alignment === sideAlignment
      );
      return filterListOp.length > 0 ? console.log('🚀🚀🚀 ~ filterBySide:', filterBySide[0].name) : null;
      // setFilter(filterBySide);
    }
  };

  useEffect(() => {
    dispatch(setFilterName(textInput));
  }, [textInput]);

  const handlePress = () => {
    setFilterOp(!filterOp);
    filterListOp.length > 0 ? handleFilter(filterApply) : null;
  };

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
              backgroundColor:
                filterListOp.length > 0 && filterOp
                  ? theme.colors.lightSide
                  : theme.colors.yellow,
            }}
            containerStyle={{
              marginLeft: 10,
              borderColor:
                filterListOp.length > 0 && filterOp
                  ? theme.colors.lightSide
                  : theme.colors.yellow,
              borderWidth: 3,
            }}
            onPress={handlePress}
          >
            <Text style={{ color: 'black', fontSize: 18 }}>
              {filterListOp.length > 0 && filterOp ? 'Apply' : 'Filter'}
            </Text>
          </Button>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'column',
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={style.textOp}>FILTER OPTIONS:</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {filterListOp?.map((op, index) => (
            <View style={style.containerFilterOp} key={index}>
              <Text style={style.textFilterOp} key={index}>
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
