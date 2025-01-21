import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Image from './Image';

describe('<Image />', () => {
  it('renders correctly with a title', () => {
    render(<Image testID="image" source={{ uri: 'https://via.placeholder.com/150' }} />);
    const image = screen.getByTestId(/image/i);
    expect(image).not.toBeNull();
  });
});
