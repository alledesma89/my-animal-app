import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { test, expect } from 'vitest';


test('Home renderiza título, input, botón y footer, y navega al enviar', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Comprueba que el título está en el documento
  expect(screen.getByRole('heading', { name: /animal search/i })).toBeInTheDocument();

  // Comprueba input y botón
  const input = screen.getByPlaceholderText(/search animals/i);
  const button = screen.getByRole('button', { name: /search/i });
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  // Simula escribir y enviar el formulario
  fireEvent.change(input, { target: { value: 'cat' } });
  fireEvent.click(button);


});
