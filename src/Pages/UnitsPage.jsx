import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import SelectFilter from '../components/Units/FilterSelect';
import UnitsFilterBar from '../components/Units/UnitsSearchBar';
import UnitsSwgoh from '../components/Units/unitsSwgoh';
import theme from '../theme';

const UnitsPage = () => {
  const [filterOp, setFilterOp] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <UnitsFilterBar setFilterOp={setFilterOp} filterOp={filterOp} />
      </View>
      {filterOp && <SelectFilter />}
      {!filterOp && <UnitsSwgoh />}
      <Link to='/'>
        <Text style={{ color: 'white', fontSize: 40 }}>Back</Text>
      </Link>
    </View>
  );
};

export default UnitsPage;

const styles = StyleSheet.create({
  // container: theme.backgroundContainer,
  container: {
    height: '100%',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    // alignContent: 'stretch',
    backgroundColor: theme.colors.background,
  },
});
