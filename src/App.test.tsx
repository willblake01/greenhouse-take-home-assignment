import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the index page title', () => {
  render(<App />);
  const title = screen.getByText(/All Positions/i);
  expect(title).toBeInTheDocument();
});
