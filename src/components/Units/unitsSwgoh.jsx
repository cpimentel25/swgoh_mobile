import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import SwgohItem from './unitsList';
import useSwgohApi from '../hooks/apiSwgoh';
import { useSelector } from 'react-redux';

const UnitsSwgoh = () => {
  const { apiSwgoh } = useSwgohApi();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(apiSwgoh);
  const filterName = useSelector((state) => state.swgohReducer.filterName);

  const filterData = (name) => {
    if (!name || name === '') {
      setFilter(apiSwgoh);
    } else {
      const filteredData = apiSwgoh.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
      setFilter(filteredData);
    }
  };

  useEffect(() => {
    filterData(filterName);
  }, [filterName]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='blue' />
      </View>
    );
  }

  const dataLoad = filter.length > 0 ? filter : apiSwgoh;

  return (
    <FlatList
      data={dataLoad}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item: data }) => <SwgohItem data={data} />}
    />
  );
};

export default UnitsSwgoh;
