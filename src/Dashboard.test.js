import React from 'react';
import { render, waitForElement, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard'
import { courses } from './assets/courses.js'

const {
  container,
  getByText,
  getByTestId,
  getByPlaceholderText,
  rerender
} = render(<Dashboard courses={courses} />);

it('renders without crashing', async () => {
  rerender(<Dashboard courses={courses} />);

  await waitForElement(() => getByText('Matérias personalizadas sem faculdade'));
});

it('renders without crashing', async () => {
  rerender(<Dashboard courses={courses} />);

  await waitForElement(() => getByText('Matérias Gerais'));
});

it('renders all the courses cards', async () => {
  rerender(<Dashboard courses={courses} />);

  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  ids.map(async (id) => {
    return await waitForElement(() => getByTestId(`card-course-${id}`));
  })
})

it('renders generic courses', async () => {
  const genericCourse = {
    "id": 1,
    "name": "Física II",
    "description": "Curso remasterizado e criado inteiramente baseado na sua graduação da POLI USP. Provas passadas resolvidas, teoria explicadinha e muitos exercícios extra. Aproveite!",
    "generic": true,
    "highlight": true
  }
  rerender(<Dashboard courses={[genericCourse]} />);
  const totalGenericCols = container.querySelectorAll('div[data-testid=genericCourses] div[data-testid=col-course]').length
  expect(totalGenericCols).toBe(1);

  const totalPersonalizedCols = container.querySelectorAll('div[data-testid=personalizedCourses] div[data-testid=col-course]').length
  expect(totalPersonalizedCols).toBe(0);
})

it('renders personalized courses', async () => {
  const personalizedCourse = {
    "id": 1,
    "name": "Física II",
    "description": "Curso remasterizado e criado inteiramente baseado na sua graduação da POLI USP. Provas passadas resolvidas, teoria explicadinha e muitos exercícios extra. Aproveite!",
    "generic": false,
    "highlight": true
  }
  rerender(<Dashboard courses={[personalizedCourse]} />);
  const totalPersonalizedCols = container.querySelectorAll('div[data-testid=personalizedCourses] div[data-testid=col-course]').length
  expect(totalPersonalizedCols).toBe(1);

  const totalGenericCols = container.querySelectorAll('div[data-testid=genericCourses] div[data-testid=col-course]').length
  expect(totalGenericCols).toBe(0);
})

it('searchs for course', async () => {
  rerender(<Dashboard courses={courses} />)
  let resultCourses = container.querySelectorAll('div[data-testid=col-course]').length
  expect(resultCourses).toBe(16);

  // Search For `Física`
  const input = getByTestId('searchBox')
  await fireEvent.change(input, { target: { value: 'Física' } })

  let resultAfterSearch = await container.querySelectorAll('div[data-testid=col-course]').length
  await expect(resultAfterSearch).toBe(4);

  // Clean Search
  await fireEvent.change(input, { target: { value: '' } })
  let resultAfterCleanSearch = await container.querySelectorAll('div[data-testid=col-course]').length
  await expect(resultAfterCleanSearch).toBe(16);
})
