
import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model - RegisterPage
 *
 * Proyecto Final QA - Grupo 2
 * Aplicacion: LambdaTest E-commerce Playground
 * Funcionalidad: F01 - Registro de usuario
 */

export interface RegisterUserData {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
  confirmPassword: string;
  newsletter?: boolean;
  acceptPrivacyPolicy?: boolean;
}

export class RegisterPage {
  readonly page: Page;

  // Campos del formulario
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;

  // Opciones adicionales
  readonly newsletterYes: Locator;
  readonly newsletterNo: Locator;
  readonly privacyPolicyCheckbox: Locator;

  // Boton de registro
  readonly continueButton: Locator;

  // Mensajes y alertas
  readonly alertMessages: Locator;
  readonly successHeading: Locator;

  constructor(page: Page) {
    this.page = page;

    // Datos personales
    this.firstNameInput = page.locator('#input-firstname');
    this.lastNameInput = page.locator('#input-lastname');
    this.emailInput = page.locator('#input-email');
    this.telephoneInput = page.locator('#input-telephone');

    // Contrasena
    this.passwordInput = page.locator('#input-password');
    this.confirmPasswordInput = page.locator('#input-confirm');

    // Newsletter
    this.newsletterYes = page.locator(
      'input[name="newsletter"][value="1"]'
    );

    this.newsletterNo = page.locator(
      'input[name="newsletter"][value="0"]'
    );

    // Politica de privacidad
    this.privacyPolicyCheckbox = page.locator(
      'input[name="agree"]'
    );

    // Boton Continue
    this.continueButton = page.getByRole('button', {
      name: 'Continue',
    });

    // Mensajes de validacion
    this.alertMessages = page.locator(
      '.alert-danger, .text-danger, .invalid-feedback'
    );

    // Confirmacion de registro
    this.successHeading = page.getByRole('heading', {
  name: 'Account',
  exact: true,
});
  }

  /**
   * Navegar al formulario de registro
   */
  async visitar(): Promise<void> {
    await this.page.goto(
      '/index.php?route=account/register'
    );
  }

  /**
   * Verificar que el formulario este disponible
   */
  async verificarFormulario(): Promise<void> {
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.telephoneInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.confirmPasswordInput).toBeVisible();
    await expect(this.continueButton).toBeVisible();
  }

  /**
   * Completar los datos del usuario
   */
  async llenarFormulario(
    usuario: RegisterUserData
  ): Promise<void> {
    await this.firstNameInput.fill(usuario.firstName);
    await this.lastNameInput.fill(usuario.lastName);
    await this.emailInput.fill(usuario.email);
    await this.telephoneInput.fill(usuario.telephone);
    await this.passwordInput.fill(usuario.password);

    await this.confirmPasswordInput.fill(
      usuario.confirmPassword
    );

    if (usuario.newsletter === true) {
      await this.newsletterYes.check();
    }

    if (usuario.newsletter === false) {
      await this.newsletterNo.check();
    }

    if (usuario.acceptPrivacyPolicy === true) {
      await this.privacyPolicyCheckbox.check();
    }
  }

  /**
   * Aceptar politica de privacidad
   */
  async aceptarPolitica(): Promise<void> {
    await this.privacyPolicyCheckbox.check();
  }

  /**
   * Enviar formulario
   */
  async enviarFormulario(): Promise<void> {
    await this.continueButton.click();
  }

  /**
   * Registrar un usuario
   */
  async registrarUsuario(
    usuario: RegisterUserData
  ): Promise<void> {
    await this.visitar();
    await this.llenarFormulario(usuario);
    await this.enviarFormulario();
  }

  
  
  /**
   * Verificar registro exitoso en OpenCart Abstracta
   */
  async verificarRegistroExitoso(): Promise<void> {

    // Comprobar que estamos en la pagina de exito.
    await expect(this.page).toHaveURL(
      /[?&]route=account\/success(?:&|$)/
    );

    // Verificar el encabezado real.
    await expect(
      this.successHeading
    ).toBeVisible();

    // Comprobar el mensaje de confirmacion.
    await expect(
      this.page.getByText(
        'Congratulations! Your new account has been successfully created!',
        { exact: false }
      )
    ).toBeVisible();
  }


  /**
   * Verificar que existen mensajes de error
   */
  async verificarErrores(): Promise<void> {
    await expect(this.alertMessages.first()).toBeVisible();
  }

  /**
   * Verificar error especifico
   */
  async verificarError(
    mensaje: string | RegExp
  ): Promise<void> {
    await expect(
      this.alertMessages.filter({
        hasText: mensaje,
      }).first()
    ).toBeVisible();
  }

  /**
   * Limpiar campos del formulario
   */
  async limpiarFormulario(): Promise<void> {
    await this.firstNameInput.clear();
    await this.lastNameInput.clear();
    await this.emailInput.clear();
    await this.telephoneInput.clear();
    await this.passwordInput.clear();
    await this.confirmPasswordInput.clear();
  }
}
