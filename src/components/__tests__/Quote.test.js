import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../Quote';

describe('Quote component', () => {
  test('renders Quote component', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Quote />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
