
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { usuarioLogin } from '../test-data/users';
import { usuarioRegistro } from '../test-data/users';

test.describe('Grupo 2 - Regresion de autenticacion', () => {

  test(
    'TC-AUTH01 - Login con campos vacios @regression',
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.visitar();
      await loginPage.verificarFormulario();

      // Intentar iniciar sesion sin credenciales
      await loginPage.loginButton.click();

      // El usuario debe permanecer en el formulario
      await expect(page).toHaveURL(
        /route=account\/login/
      );

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

      // Verificar rechazo de credenciales invalidas
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
      test.skip(
        !usuarioLogin.email || !usuarioLogin.password,
        'Se requiere una cuenta de pruebas existente'
      );

      const loginPage = new LoginPage(page);

      await loginPage.visitar();

      // Correo existente con contrasena incorrecta
      await loginPage.iniciarSesion(
        usuarioLogin.email,
        `${usuarioLogin.password}_incorrecta`
      );

      await expect(
        page.getByText(
          /No match for E-Mail Address and\/or Password/i
        ).first()
      ).toBeVisible();

      // No debe ingresar al panel de usuario
      await expect(page).toHaveURL(
        /route=account\/login/
      );
    }
  );

  test(
    'TC-AUTH04 - Registro con campos vacios @regression',
    async ({ page }) => {
      const registerPage = new RegisterPage(page);

      await registerPage.visitar();
      await registerPage.verificarFormulario();

      // Enviar formulario sin completar datos
      await registerPage.enviarFormulario();

      // El registro no debe completarse
      await expect(page).toHaveURL(
        /route=account\/register/
      );

      // Deben mostrarse mensajes de validacion
      await registerPage.verificarErrores();
    }
  );

  test(
    'TC-AUTH05 - Login exitoso @regression',
    async ({ page }) => {
      test.skip(
        !usuarioLogin.email || !usuarioLogin.password,
        'Se requiere una cuenta de pruebas existente'
      );

      const loginPage = new LoginPage(page);

      await loginPage.visitar();
      await loginPage.verificarFormulario();

      // Iniciar sesion con credenciales validas
      await loginPage.iniciarSesion(
        usuarioLogin.email,
        usuarioLogin.password
      );

      // Verificar acceso al panel de cuenta
      await expect(page).toHaveURL(
        /route=account\/account/
      );

      // Verificar contenido del panel
      await expect(
        page.getByText(
          'My Account',
          { exact: true }
        ).first()
      ).toBeVisible();
    }
  );
  
  test(
    'TC-AUTH06 - Registro exitoso @regression',
    async ({ page }) => {
      test.skip(
        !usuarioRegistro.email ||
        !usuarioRegistro.password,
        'Se requieren credenciales de registro configuradas'
      );

      const registerPage = new RegisterPage(page);

      await registerPage.registrarUsuario({
        ...usuarioRegistro,
        email: usuarioRegistro.email.replace(
          '@',
          `+qa${Date.now()}@`
        ),
      });

      // Comprobar que se creo la cuenta
      await registerPage.verificarRegistroExitoso();
    }
  );
  
  test(
    'TC-AUTH07 - Registro con correo duplicado @regression',
    async ({ page }) => {
      test.skip(
        !usuarioLogin.email ||
        !usuarioRegistro.password,
        'Se requiere un correo registrado y una contrasena de prueba'
      );

      const registerPage = new RegisterPage(page);

      await registerPage.registrarUsuario({
        ...usuarioRegistro,
        email: usuarioLogin.email,
      });

      // El sistema debe rechazar el correo existente
      await expect(page).toHaveURL(
        /route=account\/register/
      );

      // Comprobar mensaje de correo duplicado
      await registerPage.verificarError(
        /E-Mail Address is already registered/i
      );
    }
  );


});
