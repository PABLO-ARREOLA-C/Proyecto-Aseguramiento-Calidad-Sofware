
import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ProductPage } from '../pages/ProductPage';

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

  
test(
  'TC-SM04 - Buscador de productos disponible @smoke',
  async ({ page }) => {
    const productPage = new ProductPage(page);

    await page.goto('/');

    await expect(
      productPage.searchInput
    ).toBeVisible();
  }
);

test(
      'TC-SM05 - Pagina de productos disponible @smoke',
        async ({ page }) => {
        const productPage = new ProductPage(page);

        await productPage.visitarCatalogo();

        await expect(page).toHaveURL(
        /route=product\/category/
        );

          await expect(
            page.locator('body')
       ).toBeVisible();
      }
    );


});
