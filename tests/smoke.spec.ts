
import { test } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('Grupo 2 - Smoke Tests - LambdaTest', () => {

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
    'TC-SM03 - El formulario de registro carga @smoke',
    async ({ page }) => {
      const registerPage = new RegisterPage(page);

      await registerPage.visitar();
      await registerPage.verificarFormulario();
    }
  );

});
