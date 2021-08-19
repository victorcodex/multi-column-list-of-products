import { render } from '@testing-library/react';
import Home from './Home';

test('renders Home page', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
