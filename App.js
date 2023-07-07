import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/redux/store';
import Main from './src/components/Main';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
