
import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly body: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.body = page.locator('body');

    this.searchInput = page.locator(
      'input[name="search"]'
    ).first();
  }

  async visitar(): Promise<void> {
    await this.page.goto('/');
  }

  async verificarCarga(): Promise<void> {
    await expect(this.body).toBeVisible();
    await expect(this.page).toHaveTitle(/.+/);
  }

  async buscarProducto(
    nombre: string
  ): Promise<void> {
    await this.searchInput.fill(nombre);
    await this.searchInput.press('Enter');
  }

  async abrirLogin(): Promise<void> {
    await this.page.goto(
      '/index.php?route=account/login'
    );
  }

  async abrirRegistro(): Promise<void> {
    await this.page.goto(
      '/index.php?route=account/register'
    );
  }
}
