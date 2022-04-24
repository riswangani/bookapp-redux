import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './router';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {PersistStore} from './redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={PersistStore}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
});
