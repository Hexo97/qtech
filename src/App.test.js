import { render, screen } from '@testing-library/react';
import App from './App';

test('Test1:', () => {
  render(<App />);
  const linkElement = screen.getByText(/Abbas/i);
  expect(linkElement).toBeInTheDocument();
});
