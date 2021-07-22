import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

const renderHome = () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe('Home component', () => {
  test('renders Home component', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
  test('displays specific text on the screen', () => {
    renderHome();
    expect(screen.getByText('Math Magicians')).toBeInTheDocument();
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });
});
