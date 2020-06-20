import React from 'react';
import renderer from 'react-test-renderer';
import { HomeScreen } from '../index';

const props = {
  fetchAnnouncements: jest.fn()
};

describe('<HomeScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
