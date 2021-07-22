import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

const renderNavbar = () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

describe('Navbar component', () => {
  test('renders Navbar component', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });
  test('displays specific text on the screen', () => {
    renderNavbar();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText(/Quote of the Day/)).toBeInTheDocument();
  });
  test('displays a list of clickable Links to go from one view to another', () => {
    renderNavbar();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
