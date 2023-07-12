import React, { useEffect, useState } from 'react';
import { FlatList, TextInput } from 'react-native';
import SwgohItem from './ApiData';
import useSwgohApi from './hooks/apiSwgoh';
import { useSelector } from 'react-redux';

const ApiSwgoh = () => {
  const [filter, setFilter] = useState(null);
  const filterName = useSelector((state) => state.swgohReducer.filterName);
  const { apiSwgoh } = useSwgohApi();

  const filterData = (name) => {
    const filteredData = apiSwgoh.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilter(filteredData);
  };

  useEffect(() => {
    filterData(filterName);
  }, [filterName]);

  const apiSwgohFilter = filter ? filter : apiSwgoh;

  return (
    <FlatList
      data={apiSwgohFilter}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item: data }) => <SwgohItem data={data} />}
    />
  );
};

export default ApiSwgoh;
