
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.locator('#input-email');

    this.passwordInput = page.locator(
      '#input-password'
    );

    this.loginButton = page.locator(
      'input[type="submit"][value="Login"]'
    );
  }

  async visitar(): Promise<void> {
    await this.page.goto(
      '/index.php?route=account/login'
    );
  }

  async verificarFormulario(): Promise<void> {
    await expect(this.emailInput).toBeVisible();

    await expect(
      this.passwordInput
    ).toBeVisible();
  }

  async iniciarSesion(
    correo: string,
    password: string
  ): Promise<void> {
    await this.emailInput.fill(correo);

    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }
}
