
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('Grupo 2 - Regresion de autenticacion', () => {

  
test(
  'TC-AUTH01 - Login con campos vacios @regression',
  async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.visitar();
    await loginPage.verificarFormulario();

    await loginPage.loginButton.click();

    // El usuario no debe acceder a su cuenta.
    await expect(page).toHaveURL(
      /route=account\/login/
    );

    // El formulario debe continuar disponible.
    await expect(
      loginPage.emailInput
    ).toBeVisible();

    await expect(
      loginPage.passwordInput
    ).toBeVisible();
  }
);


  test(
    'TC-AUTH02 - Login con correo no registrado @regression',
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.visitar();

      await loginPage.iniciarSesion(
        'grupo2.usuario.inexistente@example.com',
        'ClavePrueba123!'
      );

      await expect(
        page.getByText(
          /No match for E-Mail Address and\/or Password/i
        ).first()
      ).toBeVisible();
    }
  );

  test(
    'TC-AUTH03 - Login con contrasena incorrecta @regression',
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.visitar();

      await loginPage.iniciarSesion(
        'grupo2.usuario.inexistente@example.com',
        'OtraClaveIncorrecta123!'
      );

      await expect(
        page.getByText(
          /No match for E-Mail Address and\/or Password/i
        ).first()
      ).toBeVisible();
    }
  );
  
test(
  'TC-AUTH04 - Registro con campos vacios @regression',
  async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.visitar();
    await registerPage.verificarFormulario();

    // Enviar sin completar los campos.
    await registerPage.enviarFormulario();

    // El registro no debe completarse.
    await expect(page).toHaveURL(
      /route=account\/register/
    );

    // Deben aparecer mensajes de validacion.
    await registerPage.verificarErrores();
  }
);


});
