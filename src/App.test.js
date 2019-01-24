import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import App from './App'
import { courses } from './assets/courses.js'

it('renders without crashing', async () => {
  const { getByText} = render(<App courses={courses} />);

  await waitForElement(() => getByText('Matérias personalizadas sem faculdade'));
});

it('renders without crashing', async () => {
  const { getByText} = render(<App courses={courses} />);

  await waitForElement(() => getByText('Matérias Gerais'));
});

it('renders all the courses cards', async () => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  ids.map(async (id) => {
    return await waitForElement(() => getByTestId(`card-course-${id}`));
  })
})
