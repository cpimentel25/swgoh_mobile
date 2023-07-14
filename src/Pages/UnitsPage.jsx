import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';
import AllUnits from '../components/Units/allUnits';
import UnitsFilterBar from '../components/Units/UnitsFilter';
import SelectFilter from '../components/Units/FilterSelect';

const UnitsPage = () => {
  return (
    <View style={styles.container}>
      <UnitsFilterBar />
      <SelectFilter />
      {/* <AllUnits /> */}
      <Link to='/'>
        <Text style={{ color: 'white', fontSize: 40 }}>Back</Text>
      </Link>
    </View>
  );
};

export default UnitsPage;

const styles = StyleSheet.create({
  container: theme.backgroundContainer,
});
