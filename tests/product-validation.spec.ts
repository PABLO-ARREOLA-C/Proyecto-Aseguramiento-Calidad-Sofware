
import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

/**
 * Grupo 2 - Validaciones locales
 * Responsable: Cesar
 *
 * Estas pruebas no requieren conexion a LambdaTest.
 */

test.describe('Grupo 2 - Validacion local de productos', () => {

  const calificacionesInvalidas = [
    { valor: 0, descripcion: 'menor al minimo' },
    { valor: 6, descripcion: 'mayor al maximo' },
    { valor: -1, descripcion: 'negativa' },
    { valor: 2.5, descripcion: 'decimal' },
    { valor: NaN, descripcion: 'no numerica' },
  ];

  for (const dato of calificacionesInvalidas) {
    test(
      `TC-VAL - Rechazar calificacion ${dato.descripcion}`,
      async ({ page }) => {
        const productPage = new ProductPage(page);

        await expect(
          productPage.seleccionarCalificacion(dato.valor)
        ).rejects.toThrow(
          'La calificacion debe ser entre 1 y 5'
        );
      }
    );
  }

});
