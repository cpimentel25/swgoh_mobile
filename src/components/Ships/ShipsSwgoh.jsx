import { FlatList, Text, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import ShipList from './ShipsList';

const GETDATA_SHIP = gql`
  query Ships {
    ships {
      name
      role
    }
  }
`;

const ShipsSwgoh = () => {
  const { loading, error, data } = useQuery(GETDATA_SHIP);
  console.log('🚀🚀🚀 ~ ~ ShipsSwgoh ~ data:', data.ships);

  if (loading) return <Text>Loading...</Text>;
  if (error)
    return (
      <View style={{ paddingTop: 30 }}>
        <Text style={{ color: 'white' }}>Error: {error.message}</Text>
      </View>
    );

  return (
    <FlatList
      data={data.ships}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item: data }) => <ShipList data={data} />}
    />
  );
};

export default ShipsSwgoh;
