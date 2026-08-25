import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';

afterEach(cleanup);

describe('Samal Sands landing page', () => {
  it('shows a sample estimate after valid dates are entered', () => {
    render(<App />);
    fireEvent.change(screen.getByLabelText('Check in'), { target: { value: '2026-09-10' } });
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-09-12' } });
    fireEvent.click(screen.getByRole('button', { name: 'Preview my stay' }));
    expect(screen.getByText('₱7,000')).toBeTruthy();
    expect(screen.getByText(/sample estimate/i)).toBeTruthy();
  });

  it('toggles the mobile navigation', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Open menu' });
    fireEvent.click(button);
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });
});
