
import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test.describe('Grupo 2 - Validacion local de productos', () => {

  test(
    'TC-VAL01 - Rechazar calificacion menor a 1',
    async ({ page }) => {
      const productPage = new ProductPage(page);

      await expect(
        productPage.seleccionarCalificacion(0)
      ).rejects.toThrow(
        'La calificacion debe ser entre 1 y 5'
      );
    }
  );

  test(
    'TC-VAL02 - Rechazar calificacion mayor a 5',
    async ({ page }) => {
      const productPage = new ProductPage(page);

      await expect(
        productPage.seleccionarCalificacion(6)
      ).rejects.toThrow(
        'La calificacion debe ser entre 1 y 5'
      );
    }
  );

});
