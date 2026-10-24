
import { test, expect } from '@playwright/test';

import { ProductPage } from '../pages/ProductPage';
import { AccountPage } from '../pages/AccountPage';

/**
 * Proyecto Final QA - Grupo 2
 * Pruebas de regresion: productos, resenas y perfil
 * Responsable: Cesar
 *
 * Requiere validar rutas y selectores con LambdaTest.
 */

test.describe('Grupo 2 - Regresion de productos y cuenta', () => {

  test(
    'TC-REV01 - Buscar un producto @regression',
    async ({ page }) => {
      const productPage = new ProductPage(page);

      await productPage.buscarProducto('iPhone');

      await expect(
        page.locator('body')
      ).toBeVisible();

      await expect(page).toHaveURL(
        /route=product\/search/
      );
    }
  );

  test(
    'TC-REV02 - Visualizar un producto @regression',
    async ({ page }) => {
      const productPage = new ProductPage(page);

      await productPage.buscarProducto('iPhone');

      await productPage.abrirPrimerProducto();

      await expect(page).toHaveURL(
        /route=product\/product/
      );

      await expect(
        page.locator('h1').first()
      ).toBeVisible();
    }
  );

  test(
    'TC-REV03 - Validar formulario de resenas @regression',
    async ({ page }) => {
      const productPage = new ProductPage(page);

      await productPage.buscarProducto('iPhone');

      await productPage.abrirPrimerProducto();

      await productPage.abrirResenas();

      await productPage.verificarFormularioResena();
    }
  );

  test(
    'TC-REV04 - Verificar acceso a cuenta @regression',
    async ({ page }) => {
      const accountPage = new AccountPage(page);

      await accountPage.visitar();

      // Sin sesion activa, la aplicacion no deberia
      // permitir acceder a una cuenta privada.
      await expect(page).toHaveURL(
        /route=account\/login/
      );
    }
  );

  
test(
  'TC-REV05 - Resena con campos vacios @regression',
  async ({ page }) => {
    const productPage = new ProductPage(page);

    // Buscar y abrir un producto.
    await productPage.buscarProducto('iPhone');
    await productPage.abrirPrimerProducto();

    // Acceder a resenas.
    await productPage.abrirResenas();

    // Comprobar formulario.
    await productPage.verificarFormularioResena();

    // Enviar sin llenar campos.
    await productPage.enviarResena();

    // La aplicacion debe mostrar una validacion.
    await expect(
      productPage.alertMessages.first()
        ).toBeVisible();
    }
  );

  
test(
  'TC-REV06 - Validar acceso a edicion de perfil @regression',
  async ({ page }) => {
    const accountPage = new AccountPage(page);

    await accountPage.abrirEditarPerfil();

    // Una persona sin sesion no debe poder
    // acceder a la edicion del perfil.
    await expect(page).toHaveURL(
      /route=account\/login/
    );
  }
);

test(
  'TC-REV07 - Validar acceso a cambio de contrasena @regression',
  async ({ page }) => {
    const accountPage = new AccountPage(page);

    await accountPage.abrirCambiarPassword();

    // Sin autenticacion no debe permitirse
    // cambiar la contrasena.
    await expect(page).toHaveURL(
      /route=account\/login/
    );
  }
);



});
