import React from 'react'
import { render, waitForElement, fireEvent } from 'react-testing-library'
import App from './App'
import mockAxios from 'jest-mock-axios'
import { courses } from './assets/courses.js'

afterEach(() => {
  mockAxios.reset()
});

it('renders loading page and after renders course page', async () => {
  const { getByText, queryByTestId } = render(<App />)

  await waitForElement(() => getByText('Carregando'));
  const responseObj = { data: courses, status: 200 };
  await mockAxios.mockResponse(responseObj);
  await waitForElement(() => getByText('Matérias Gerais'));
});

it('renders loading page and return error page, retry and  renders course page', async () => {
  const { getByText, queryByTestId } = render(<App />)

  await waitForElement(() => getByText('Carregando'));
  await mockAxios.mockError({});
  await waitForElement(() => getByText('Ops, aconteceu um erro inesperado, tente novamente!'));

  await fireEvent.click(getByText('Tentar novamente'));
  await waitForElement(() => getByText('Carregando'));
  const responseObj = { data: courses, status: 200 };
  await mockAxios.mockResponse(responseObj);
  await waitForElement(() => getByText('Matérias Gerais'));
});

it('renders loading page and return error page, retry and renders error page', async () => {
  const { getByText, queryByTestId } = render(<App />)

  await waitForElement(() => getByText('Carregando'));
  await mockAxios.mockError();
  await waitForElement(() => getByText('Ops, aconteceu um erro inesperado, tente novamente!'));
  await fireEvent.click(getByText('Tentar novamente'));
  await waitForElement(() => getByText('Carregando'));
  await mockAxios.mockError();
  await waitForElement(() => getByText('Ops, aconteceu um erro inesperado, tente novamente!'));
});
