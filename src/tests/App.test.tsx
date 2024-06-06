import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from '../App';
import renderWithContexts from './helpers/renderWithContexts';
import userEvent from '@testing-library/user-event'
import mockData from './helpers/mockData';
import { vi } from 'vitest';

const MOCK_RESPONSE = {
  ok: true,
  status: 200,
  json: async () => mockData,
} as Response;

describe('testes do filtro por nome', () => {
  test('testando a letra "o"', async () => {
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    renderWithContexts(<App />);
    
    const nameInput = screen.getByTestId('name-filter');
    await userEvent.type(nameInput, 'o');
    const table = screen.getByRole('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody?.querySelectorAll('tr');
    rows?.forEach((row) => {
      const cell = row.querySelectorAll('td')[0];
      expect(cell.textContent).toContain('o');
    });
  });
  test('testando a letras "oo"', async () => {
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    renderWithContexts(<App />);
    
    const nameInput = screen.getByTestId('name-filter');
    await userEvent.type(nameInput, 'oo');    
    const table = screen.getByRole('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody?.querySelectorAll('tr');
    rows?.forEach((row) => {
      const cell = row.querySelectorAll('td')[0];
      expect(cell.textContent).toContain('oo');
    });
  })
});

describe('testes no filtro por números', () => {
  test('testando se o filtro de população maior que 200.000 funciona', async () => {
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    renderWithContexts(<App />);
    
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    await userEvent.type(valueFilter, '200000');
    await userEvent.click(buttonFilter);

    const table = screen.getByRole('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody?.querySelectorAll('tr');
    rows?.forEach((row) => {
      const cell = row.querySelectorAll('td')[8];
      expect(Number(cell.textContent)).toBeGreaterThan(200000);
    });
  });
  test('testando se o filtro de periodo de rotação menor que 20 funciona', async () => {
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    renderWithContexts(<App />);

    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    await userEvent.selectOptions(columnFilter, ['rotation_period']);
    await userEvent.selectOptions(comparisonFilter, ['menor que']);
    await userEvent.type(valueFilter, '20');
    await userEvent.click(buttonFilter);

    const table = screen.getByRole('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody?.querySelectorAll('tr');
    rows?.forEach((row) => {
      const cell = row.querySelectorAll('td')[1];
      expect(Number(cell.textContent)).toBeLessThan(20);
    });
  });
  test('testando se o filtro de diâmetro igual a 12500 funciona', async () => {
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    renderWithContexts(<App />);

    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    await userEvent.selectOptions(columnFilter, ['diameter']);
    await userEvent.selectOptions(comparisonFilter, ['igual a']);
    await userEvent.type(valueFilter, '12500');
    await userEvent.click(buttonFilter);

    const table = screen.getByRole('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody?.querySelectorAll('tr');
    rows?.forEach((row) => {
      const cell = row.querySelectorAll('td')[3];
      expect(Number(cell.textContent)).toBe(12500);
    });
  });
  test('testando se 2 filtros funcionam encadeados', async () => {
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    renderWithContexts(<App />);

    const columnFilter = screen.getByTestId('column-filter');
    const comparisonFilter = screen.getByTestId('comparison-filter');
    const valueFilter = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    await userEvent.selectOptions(columnFilter, ['rotation_period']);
    await userEvent.selectOptions(comparisonFilter, ['menor que']);
    await userEvent.type(valueFilter, '20');
    await userEvent.click(buttonFilter);

    await userEvent.type(valueFilter, '200000');
    await userEvent.click(buttonFilter);

    const table = screen.getByRole('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody?.querySelectorAll('tr');
    rows?.forEach((row) => {
      const populationCell = row.querySelectorAll('td')[8];
      const rotationPeriod = row.querySelectorAll('td')[1];
      expect(Number(populationCell.textContent)).toBeGreaterThan(200000);
      expect(Number(rotationPeriod.textContent)).toBeLessThan(20);
    });
  });
});
