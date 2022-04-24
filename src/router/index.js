import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import Splash from '../screens/Splash/Splash';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import SuccessRegister from '../screens/auth/SuccessRegister';
import BookDetail from '../screens/Home/BookDetail';
import Error from '../screens/auth/Error';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessRegister"
        component={SuccessRegister}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Error"
        component={Error}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
