import 'react-native';
import React from 'react';
import {create, act, renderer} from 'react-test-renderer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../src/redux/reducers';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';

import Login from '../src/screens/auth/Login';

const Store = createStore(reducer, applyMiddleware(thunk));

configure({adapter: new Adapter()});

const tree = create(
  <Provider store={Store}>
    <Login />
  </Provider>,
);

describe('RegisterScreen', () => {
  it('should render Login Screen, module correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  it('renders button registrasi', () => {
    const inputEmail = tree.root.findByProps({testID: 'InputEmail'}).props;
    const inputPassword = tree.root.findByProps({
      testID: 'InputPassword',
    }).props;
    const button = tree.root.findByProps({testID: 'myButtonLogin'}).props;

    act(() => inputEmail.onChangeText('riswan.qwe123@gmail.com'));
    act(() => inputPassword.onChangeText('Riswan12344'));
    act(() => button.onPress());
  });
});
