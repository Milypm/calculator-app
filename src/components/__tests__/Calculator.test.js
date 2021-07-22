import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../Calculator';

const renderCalculator = () => {
  render(
    <BrowserRouter>
      <Calculator />
    </BrowserRouter>
  );
};

describe('Calculator component', () => {
  test('renders Calculator component', () => {
    render(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>
    );
  });
  test('displays specific text on the screen', () => {
    renderCalculator();
    expect(screen.getByText("Let's do some math!")).toBeInTheDocument();
  });
});
