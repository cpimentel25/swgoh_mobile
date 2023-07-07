import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import SwgohItem from './ApiData';

const ApiSwgoh = () => {
  const [apiSwgoh, setApiSwgoh] = useState([]);

  const fetchApiSwgoh = async () => {
    const response = await global.fetch('http://api.swgoh.gg/characters/');
    const json = await response.json();
    setApiSwgoh(json);
  };

  useEffect(() => {
    fetchApiSwgoh();
  }, []);

  return (
    <FlatList
      data={apiSwgoh}
      keyExtractor={(item) => item.base_id}
      renderItem={({ item: data }) => <SwgohItem data={data} />}
    />
  );
};

export default ApiSwgoh;
