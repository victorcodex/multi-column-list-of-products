import React from 'react';
import { render } from '@testing-library/react';

import { LoadingAnimation } from './LoadingAnimation';

describe('LoadingAnimation', () => {
  it('should render loading animation', () => {
    const { asFragment } = render(<LoadingAnimation delay="1.5s" />);
    expect(asFragment()).toMatchSnapshot();
  });
});