import React from 'react';
import '@testing-library/jest-dom';

import { fakeIntl } from '../../util/testData';
import { renderWithProviders as render, testingLibrary } from '../../util/test-helpers';

import { NotFoundPageComponent } from './NotFoundPage';

const { screen } = testingLibrary;

const noop = () => null;

const routeConfiguration = [
  {
    path: '/',
    name: 'LandingPage',
    component: props => <div />,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: props => <div />,
  },
];

describe('NotFoundPage', () => {
  test('SearchForm has placeholder when isKeywordSearch=true', () => {
    render(
      <NotFoundPageComponent
        scrollingDisabled={false}
        marketplaceName="My Marketplace"
        isKeywordSearch={true}
        intl={fakeIntl}
        routeConfiguration={routeConfiguration}
        history={{
          push: noop,
        }}
      />
    );
    const placeholder = 'NotFoundPage.SearchForm.placeholder';
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();

    // TODO: when isKeywordSearch = false, the form uses LocationAutocompleteInput, which is code-splitted
  });
});
