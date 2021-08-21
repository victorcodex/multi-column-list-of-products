import React from 'react';
import { render } from '@testing-library/react';
import ProductFilterContainer from './ProductFilterContainer';

describe('ProductFilterContainer component', () => {
  it('should render filter container', () => {
    const { asFragment } = render(<ProductFilterContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});