import React from 'react';
import { render } from '@testing-library/react';
import { SelectInput } from './SelectInput';

describe('SelectInput component', () => {
  it('should render select element', () => {
    const { asFragment } = render(<SelectInput />);
    expect(asFragment()).toMatchSnapshot();
  });
});