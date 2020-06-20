import React from 'react';
import renderer from 'react-test-renderer';
import { AuthLoadingScreen } from '../index';

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AuthLoadingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
