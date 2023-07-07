import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  }
});

const SwgohItem = ({ data }) => (
  <View key={data.base_id} style={style.container}>
    <Text style={style.name}>{data.name}</Text>
    <Image style={style.image} source={{ uri: data.image }} />
    <Text>Power: {data.power}</Text>
    <Text>Combat type: {data.combat_type}</Text>
    <Text>Alignment :{data.alignment}</Text>
    <Text>Categories: {data.categories}</Text>
    <Text>Role: {data.role}</Text>
    <Text>Ability classes: {data.ability_classes}</Text>
    <Text>Description: {data.description}</Text>
    <Text>Activate shard count: {data.activate_shard_count}</Text>
    <Text>Ship: {data.ship}</Text>
    <Text>Ship slot: {data.ship_slot}</Text>
  </View>
);

export default SwgohItem;
