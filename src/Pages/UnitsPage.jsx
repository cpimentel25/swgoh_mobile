import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';
import AllUnits from '../components/Units/allUnits';
import AppBar from '../components/AppBar';

const UnitsPage = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Link to='/'>
        <Text style={{ color: 'white', fontSize: 40 }}>Back</Text>
      </Link>
      <AllUnits />
    </View>
  );
};

export default UnitsPage;

const styles = StyleSheet.create({
  container: theme.backgroundContainer,
});
