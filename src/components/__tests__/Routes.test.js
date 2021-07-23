import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Routes from '../Routes';

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Routes />
    </Router>,
  );
  expect(screen.getByText(/Welcome to our page!/i)).toBeInTheDocument();
  const leftClick = { button: 0 };
  userEvent.click(screen.getByText('Calculator'), leftClick);
  expect(screen.getByText(/Let's do some math!/i)).toBeInTheDocument();
});
