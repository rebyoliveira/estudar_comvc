import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import CourseSection from './CourseSection'
import { courses } from './assets/courses.js'

const { getByTestId, container, rerender } = render(<CourseSection courses={courses} />);

it('renders without crashing', async () => {
  const totalCols = container.querySelectorAll('div[data-testid=col-course]').length
  expect(totalCols).toBe(16);
});

it('renders with 0 cols with empty array', async () => {
  rerender(<CourseSection courses={[]} />);

  const totalCols = container.querySelectorAll('div[data-testid=col-course]').length
  expect(totalCols).toBe(0);
});
