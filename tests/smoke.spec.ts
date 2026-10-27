
import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';
import { ProductPage } from '../pages/ProductPage';
import { usuarioLogin } from '../test-data/users';

const tieneCredenciales = Boolean(
  usuarioLogin.email.trim() &&
  usuarioLogin.password.trim()
);

test.describe('Grupo 2 - Smoke Tests - OpenCart Abstracta', () => {

  test(
    'TC-SM01 - La pagina principal carga @smoke',
    async ({ page }) => {
      const homePage = new HomePage(page);

      await homePage.visitar();
      await homePage.verificarCarga();
    }
  );

  test(
    'TC-SM02 - El formulario de login carga @smoke',
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.visitar();
      await loginPage.verificarFormulario();
    }
  );

  test(
    'TC-SM03 - Inicio de sesion exitoso @smoke',
    async ({ page }) => {
      test.skip(
        !tieneCredenciales,
        'Se requieren QA_USER_EMAIL y QA_USER_PASSWORD en .env'
      );

      const loginPage = new LoginPage(page);

      await loginPage.visitar();

      await loginPage.iniciarSesion(
        usuarioLogin.email,
        usuarioLogin.password
      );

      await expect(page).toHaveURL(
        /[?&]route=account\/account(?:&|$)/
      );
    }
  );

  test(
    'TC-SM04 - Cierre de sesion exitoso @smoke',
    async ({ page }) => {
      test.skip(
        !tieneCredenciales,
        'Se requieren QA_USER_EMAIL y QA_USER_PASSWORD en .env'
      );

      const loginPage = new LoginPage(page);
      const accountPage = new AccountPage(page);

      // Iniciar sesion antes de cerrar la sesion.
      await loginPage.visitar();

      await loginPage.iniciarSesion(
        usuarioLogin.email,
        usuarioLogin.password
      );

      // Verificar que el inicio de sesion fue exitoso.
      await expect(page).toHaveURL(
        /[?&]route=account\/account(?:&|$)/
      );

      // Cerrar sesion.
      await accountPage.cerrarSesion();

      // Verificar que se muestra la pagina de logout.
      await expect(page).toHaveURL(
        /[?&]route=account\/logout(?:&|$)/
      );

      // Comprobar que ya no existe una sesion activa.
      await accountPage.visitar();

      await expect(page).toHaveURL(
        /[?&]route=account\/login(?:&|$)/
      );
    }
  );

  test(
    'TC-SM05 - Pagina de detalle de producto disponible @smoke',
    async ({ page }) => {
      const productPage = new ProductPage(page);

      await productPage.visitarCatalogo();
      await productPage.abrirPrimerProducto();

      await expect(page).toHaveURL(
        /[?&]route=product\/product(?:&|$)/
      );

      await expect(
        page.locator('h1').first()
      ).toBeVisible();
    }
  );

});
