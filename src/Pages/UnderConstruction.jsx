import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';

const UnderConstruction = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 40 }}>Under Construction</Text>
      <Link to='/'>
        <Text style={{ color: 'white', fontSize: 40 }}>Back</Text>
      </Link>
    </View>
  );
};

export default UnderConstruction;

const styles = StyleSheet.create({
  container: theme.backgroundContainer,
});
