import React from 'react';
import renderer from 'react-test-renderer';
import MessageContainer from '../index';

const props = {
  messageHeader: 'Title',
  messageText: 'Description',
  messageUser: 'User 1',
  messageTime: '12.03.14'
};

describe('<MessageContainer />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MessageContainer {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
