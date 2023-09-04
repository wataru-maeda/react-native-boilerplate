import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('<Button />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Button title="Test button" />).toJSON();
    expect(tree?.children.length).toBe(1);
  });
});
