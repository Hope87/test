import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('adds a new task', () => {
  const { getByLabelText, getByText } = render(<App />);
  
  const input = getByLabelText(/new task/i);
  fireEvent.change(input, { target: { value: 'Test task' } });
  
  fireEvent.click(getByText(/add task/i));
  
  expect(getByText(/test task/i)).toBeInTheDocument();
});

test('toggles task completion', () => {
  const { getByLabelText, getByText } = render(<App />);
  
  const input = getByLabelText(/new task/i);
  fireEvent.change(input, { target: { value: 'Test task' } });
  
  fireEvent.click(getByText(/add task/i));
  const checkbox = getByText(/test task/i).parentElement!.querySelector('input[type="checkbox"]')!;
  
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});
