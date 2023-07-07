import React from 'react';
import { View, Text } from 'react-native';
import ApiSwgoh from './ApiSwgoh';

const CharList = () => {
  return (
    <View>
      {/* {ApiSwgoh.map((data) => (
        <View key={data.base_id}>
          <Text>{data}</Text>
        </View>
      ))} */}
      <ApiSwgoh />
    </View>
  );
};

export default CharList;
