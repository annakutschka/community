import React from 'react';
import renderer from 'react-test-renderer';
import { CreateCommunity } from '../index';

const props = {
  createCommunityAndAddToUser: jest.fn(),
  navigation: {
    navigate: jest.fn()
  }
};

describe('<CreateCommunity />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CreateCommunity {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
