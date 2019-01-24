import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import CourseCard from './CourseCard'
import { courses } from './assets/courses.js'

const course = {
  "id": 1,
  "name": "Física II",
  "description": "Curso remasterizado e criado inteiramente baseado na sua graduação da POLI USP. Provas passadas resolvidas, teoria explicadinha e muitos exercícios extra. Aproveite!",
  "generic": false,
  "highlight": true
}

const { rerender, getByText, queryByTestId, debug } = render(
  <CourseCard
    id={course.id}
    name={course.name}
    description={course.description}
    highlight={course.highlight}
  />
)

it('renders without crashing', async () => {
  await waitForElement(() => getByText('Física II'))
  await waitForElement(() => getByText(course.description))
});

it('renders the highlight ribbon', async () => {
  await waitForElement(() => getByText('Em Alta'))
});

it('does not render the highlight ribbon', async () => {
  rerender(
    <CourseCard
      id={course.id}
      name={course.name}
      description={course.description}
      highlight={false}
    />
  )

  expect(queryByTestId('ribbon-course-1')).toBeNull()
});

it('renders the default description if none is given', async () => {
  rerender(
    <CourseCard
      id={course.id}
      name={course.name}
      description={''}
      highlight={false}
    />
  )
  await waitForElement(() => getByText('Sem descrição no momento'))
});
