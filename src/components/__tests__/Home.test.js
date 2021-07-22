import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

describe('Home component', () => {
  test('renders Home component', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
