import { Provider } from 'react-redux';
import { store } from './src/app/redux/store';
import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Routes } from 'react-router-native';
import UnitsPage from './src/Pages/UnitsPage';
import UnderConstruction from './src/Pages/UnderConstruction';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NativeRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/units' element={<UnitsPage />} />
            <Route path='/ships' element={<UnderConstruction />} />
            <Route path='/stats' element={<UnderConstruction />} />
            <Route path='/guilds' element={<UnderConstruction />} />
            <Route path='/news' element={<UnderConstruction />} />
          </Routes>
        </NativeRouter>
      </Provider>
    </>
  );
}
