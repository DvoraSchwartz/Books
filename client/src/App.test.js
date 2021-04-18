import { render, screen } from '@testing-library/react';
import App, { sumNumbers, numAverage } from './App';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('should return the sum of 2 numbers', () => {
  expect(sumNumbers(5, 6)).toBe(11)
});

test('should return the average of numbers', () => {
  expect(numAverage(3, 7, 5, 9)).toBe(4)
})
