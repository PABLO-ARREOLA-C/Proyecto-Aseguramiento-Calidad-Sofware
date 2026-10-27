
import { Page, Locator, expect } from '@playwright/test';

/**
 * Proyecto Final QA - Grupo 2
 * Page Object: Gestion de cuenta de usuario
 * Responsable: Cesar
 */

export interface DatosPerfil {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
}

export class AccountPage {
  readonly page: Page;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;

  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;

  readonly continueButton: Locator;
  readonly alertMessages: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.locator('#input-firstname');
    this.lastNameInput = page.locator('#input-lastname');
    this.emailInput = page.locator('#input-email');
    this.telephoneInput = page.locator('#input-telephone');

    this.passwordInput = page.locator('#input-password');
    this.confirmPasswordInput = page.locator('#input-confirm');

    this.continueButton = page.locator(
      'input[type="submit"][value="Continue"]'
    );

    this.alertMessages = page.locator(
      '.alert, .text-danger, .invalid-feedback'
    );
  }

  // Abrir panel principal de cuenta
  async visitar(): Promise<void> {
    await this.page.goto(
      '/index.php?route=account/account'
    );
  }

  // Abrir formulario de edicion de perfil
  async abrirEditarPerfil(): Promise<void> {
    await this.page.goto(
      '/index.php?route=account/edit'
    );
  }

  // Abrir formulario de cambio de contrasena
  async abrirCambiarPassword(): Promise<void> {
    await this.page.goto(
      '/index.php?route=account/password'
    );
  }

  // Comprobar formulario de perfil
  async verificarFormularioPerfil(): Promise<void> {
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.telephoneInput).toBeVisible();
  }

  // Completar datos personales
  async llenarPerfil(datos: DatosPerfil): Promise<void> {
    await this.firstNameInput.fill(datos.firstName);
    await this.lastNameInput.fill(datos.lastName);
    await this.emailInput.fill(datos.email);
    await this.telephoneInput.fill(datos.telephone);
  }

  // Guardar datos del perfil
  async guardarPerfil(): Promise<void> {
    await this.continueButton.click();
  }

  // Comprobar formulario de contrasena
  async verificarFormularioPassword(): Promise<void> {
    await expect(this.passwordInput).toBeVisible();
    await expect(this.confirmPasswordInput).toBeVisible();
  }

  // Completar cambio de contrasena
  async llenarCambioPassword(
    nuevaPassword: string,
    confirmarPassword: string
  ): Promise<void> {
    await this.passwordInput.fill(nuevaPassword);
    await this.confirmPasswordInput.fill(confirmarPassword);
  }

  // Guardar nueva contrasena
  async guardarPassword(): Promise<void> {
    await this.continueButton.click();
  }

  // Comprobar mensaje de error
  async verificarError(
    mensaje: string | RegExp
  ): Promise<void> {
    await expect(
      this.alertMessages.filter({
        hasText: mensaje,
      }).first()
    ).toBeVisible();
  }
  
  // Cerrar sesion del usuario
  async cerrarSesion(): Promise<void> {
    await this.page.goto(
      '/index.php?route=account/logout'
    );

    // Verificar que estamos en la pagina de logout
    await expect(this.page).toHaveURL(
      /[?&]route=account\/logout(?:&|$)/
    );

    // Verificar el encabezado real de OpenCart Abstracta
    await expect(
      this.page.getByRole('heading', {
        name: 'Account',
        exact: true,
      })
    ).toBeVisible();

    // Verificar el mensaje de cierre de sesion exitoso
    await expect(
      this.page.getByText(
        'You have been logged off your account.',
        { exact: false }
      )
    ).toBeVisible();
  }

}
