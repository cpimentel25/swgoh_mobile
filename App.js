import { Provider } from 'react-redux';
import { store } from './src/app/redux/store';
import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}
