import { cleanup, render } from '@testing-library/react';

import { UiFooter } from './ui-footer';

describe('UiFooter', () => {
  it('should render correctly', () => {
    const { baseElement } = render(<UiFooter website="ericbuettner.com" />);

    // Check that the component renders without errors
    expect(baseElement).toBeInTheDocument();
  });
});

describe('UiFooter', () => {
  afterEach(() => {
    // Clean up after each test
    cleanup();
  });

  test('contains the ericbuettner.com link and ericbuettner.com utm_source query', () => {
    const { getByText } = render(<UiFooter website="ericbuettner.com" />);

    // Check that the "ericbuettner.com" link is present
    const link = getByText('Eric Büttner');
    expect(link).toBeInTheDocument();

    // Check that the link has the correct attributes
    expect(link).toHaveAttribute(
      'href',
      'https://www.ericbuettner.com/?utm_source=ericbuettner.com&utm_medium=link&utm_campaign=crafted-with-heart',
    );
    expect(link).toHaveAttribute('title', 'Eric Büttner');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('contains the ericbuettner.com link and coding-booth.com utm_source query', () => {
    const { getByText } = render(<UiFooter website="coding-booth.com" />);

    // Check that the "ericbuettner.com" link is present
    const link = getByText('Eric Büttner');
    expect(link).toBeInTheDocument();

    // Check that the link has the correct attributes
    expect(link).toHaveAttribute(
      'href',
      'https://www.ericbuettner.com/?utm_source=coding-booth.com&utm_medium=link&utm_campaign=crafted-with-heart',
    );
    expect(link).toHaveAttribute('title', 'Eric Büttner');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
