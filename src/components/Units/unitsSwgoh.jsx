import React, { useMemo } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { gql, useQuery } from '@apollo/client';
import SwgohItem from './unitsList';

const GETDATA_UNITS = gql`
  query Units {
    units {
      name
      image
      alignment
      categories
    }
  }
`;

const UnitsSwgoh = () => {
  const { loading, error, data } = useQuery(GETDATA_UNITS);

  const filterName = useSelector((state) => state.swgohReducer.filterName);

  const filterData = (name, units) => {
    if (!name || name === '') {
      return units;
    } else {
      return units.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    }
  };

  const filteredData = useMemo(
    () => filterData(filterName, data?.units || []),
    [filterName, data?.units]
  );

  if (loading) return <Text>Loading...</Text>;
  if (error)
    return (
      <View style={{ paddingTop: 30 }}>
        <Text style={{ color: 'white' }}>Error: {error.message}</Text>
      </View>
    );

  const handleClick = (data) => {
    console.log('🚀🚀🚀 ~ data: ', data);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleClick(item)}>
      <SwgohItem data={item} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={filteredData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

export default UnitsSwgoh;
