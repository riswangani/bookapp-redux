import 'react-native';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import renderer from 'react-test-renderer';

import Splash from '../src/screens/Splash/Splash';

configure({adapter: new Adapter(), disableLifecycleMethods: true});

const tree = shallow(<Splash />);

describe('Splashscren', () => {
  it('should render correctly', () => {
    renderer.create(<Splash />);
  });

  it('should render Splash Screen, module correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
