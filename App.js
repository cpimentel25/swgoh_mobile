import { Provider } from 'react-redux';
import { store } from './src/app/redux/store';
import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Routes } from 'react-router-native';
import client from './apollo';
import Main from './src/components/Main';
import UnderConstruction from './src/Pages/UnderConstruction';
import UnitsPage from './src/Pages/UnitsPage';
import ShipsPage from './src/Pages/ShipsPage';

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <StatusBar style='light' />
        <NativeRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/units' element={<UnitsPage />} />
            <Route path='/ships' element={<ShipsPage />} />
            <Route path='/stats' element={<UnderConstruction />} />
            <Route path='/guilds' element={<UnderConstruction />} />
            <Route path='/news' element={<UnderConstruction />} />
          </Routes>
        </NativeRouter>
      </ApolloProvider>
    </Provider>
  );
}
