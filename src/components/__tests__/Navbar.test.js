import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  test('renders Navbar component', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
