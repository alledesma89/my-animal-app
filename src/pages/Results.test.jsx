import { render, screen, within } from '@testing-library/react';
import Results from '../pages/Results';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { vi } from 'vitest';
import { faker } from '@faker-js/faker';
import generateFakeData from '../data/fakeData';

vi.mock('../data/fakeData');

afterEach(() => {
  vi.restoreAllMocks();
});

test('Results muestra resultados usando faker y mock', async () => {
  const fakeAnimal = {
    id: faker.number.int(),
    type: 'cat',
    title: faker.animal.cat(),
    description: faker.lorem.sentence(),
    image: faker.image.url(),
    url: faker.internet.url(),
  };

  generateFakeData.mockResolvedValue([fakeAnimal]);

  render(
    <MemoryRouter initialEntries={['/results?query=cat']}>
      <Routes>
        <Route path="/results" element={<Results />} />
      </Routes>
    </MemoryRouter>
  );

  // Esperamos a que aparezca el contenedor de resultados
  const resultsContainer = await screen.findByRole('region', { name: /results/i });

  // Buscamos el título del animal dentro de ese contenedor
  const { getByText } = within(resultsContainer);
  const animalTitle = getByText((content) =>
    content.toLowerCase().includes(fakeAnimal.title.toLowerCase())
  );

  expect(animalTitle).toBeInTheDocument();
});
