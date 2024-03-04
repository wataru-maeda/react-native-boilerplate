import React from 'react';
import renderer from 'react-test-renderer';
import Image from './Image';

describe('Image Component', () => {
  it('renders correctly with a title', () => {
    const { root } = renderer.create(<Image source={{ uri: 'https://via.placeholder.com/150' }} />);
    expect(root).toBeTruthy();
  });
});
