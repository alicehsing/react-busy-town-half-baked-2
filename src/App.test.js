import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to Busy Town', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Busy Town!/i);
  expect(linkElement).toBeInTheDocument();
});
