import React from 'react';
import { render } from '@testing-library/react';
import ProductsContainer from './ProductsContainer';

describe('ProductsContainer component', () => {
  it('should render product container', () => {
    const { asFragment } = render(<ProductsContainer rating={100}></ProductsContainer>);
    expect(asFragment()).toMatchSnapshot();
  });
});