import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../Quote';

const renderQuote = () => {
  render(
    <BrowserRouter>
      <Quote />
    </BrowserRouter>
  );
};

describe('Quote component', () => {
  test('renders Quote component', () => {
    render(
      <BrowserRouter>
        <Quote />
      </BrowserRouter>
    );
  });
  test('displays specific text on the screen', () => {
    renderQuote();
    expect(screen.getByText(/Rene Descartes/)).toBeInTheDocument();
  });
});
