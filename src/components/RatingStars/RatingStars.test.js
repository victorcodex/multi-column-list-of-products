import React from 'react';
import { render } from '@testing-library/react';
import RatingStars from './RatingStars';

describe('RatingStars component', () => {
  it('should render rating stars', () => {
    const { asFragment } = render(<RatingStars rating={100}>★★★★★</RatingStars>);
    expect(asFragment()).toMatchSnapshot();
  });
});