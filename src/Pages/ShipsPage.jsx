import { StyleSheet, Text, View } from 'react-native';
import theme from '../theme';
import ShipsSwgoh from '../components/Ships/ShipsSwgoh';
import { Link } from 'react-router-native';

const ShipsPage = () => {
  return (
    <View style={styles.container}>
      <ShipsSwgoh />
      <Link to='/'>
        <Text style={{ color: 'white', fontSize: 40 }}>Back</Text>
      </Link>
    </View>
  );
};

export default ShipsPage;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.background,
  },
});
