
import { test, expect } from '@playwright/test';
import { validarResena } from '../helpers/review-validator';

test.describe('Grupo 2 - Validacion local de resenas', () => {

  const casos = [
    {
      nombre: 'nombre vacio',
      datos: {
        nombre: '',
        comentario: 'Excelente producto de prueba',
        calificacion: 5
      },
      error: 'El nombre es obligatorio'
    },
    {
      nombre: 'comentario vacio',
      datos: {
        nombre: 'Usuario QA',
        comentario: '',
        calificacion: 4
      },
      error: 'El comentario es obligatorio'
    },
    {
      nombre: 'calificacion invalida',
      datos: {
        nombre: 'Usuario QA',
        comentario: 'Producto de prueba',
        calificacion: 0
      },
      error: 'La calificacion debe ser entre 1 y 5'
    }
  ];

  for (const caso of casos) {
    test(`Validar resena con ${caso.nombre}`, async () => {
      const errores = validarResena(caso.datos);

      expect(errores).toContain(caso.error);
    });
  }

  test('Aceptar datos locales validos', async () => {
    const errores = validarResena({
      nombre: 'Usuario QA',
      comentario: 'Producto evaluado correctamente',
      calificacion: 5
    });

    expect(errores).toEqual([]);
  });

});
