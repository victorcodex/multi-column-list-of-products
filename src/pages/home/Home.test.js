import { render } from '@testing-library/react';
import Home from './Home';

describe('Home page', () => {
  it('should render Home page', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
