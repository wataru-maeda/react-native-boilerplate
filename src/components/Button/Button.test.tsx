import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button Component', () => {
  it('renders correctly with a title', () => {
    const { root } = renderer.create(<Button title="Click Me" />);
    expect(root).toBeTruthy();
  });
});
