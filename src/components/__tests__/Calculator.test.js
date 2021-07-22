import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../Calculator';

describe('Calculator component', () => {
  test('renders Calculator component', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Calculator />
      </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
