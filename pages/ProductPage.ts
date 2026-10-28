
import { Page, Locator, expect } from '@playwright/test';

/**
 * Proyecto Final QA - Grupo 2
 * Page Object: Productos y resenas
 * Responsable: Cesar
 */

export interface DatosResena {
  nombre: string;
  comentario: string;
  calificacion: number;
}

export class ProductPage {
  readonly page: Page;

  readonly searchInput: Locator;
  readonly productLinks: Locator;

  readonly reviewNameInput: Locator;
  readonly reviewTextInput: Locator;
  readonly reviewButton: Locator;

  readonly reviewTab: Locator;
  readonly alertMessages: Locator;

  constructor(page: Page) {
    this.page = page;

    // Buscador de productos
    this.searchInput = page.locator(
      'input[name="search"]'
    ).first();

    // Enlaces a productos
    this.productLinks = page.locator(
      'a[href*="product/product"]'
    );

    // Formulario de resenas
    this.reviewNameInput = page.locator('#input-name');

    this.reviewTextInput = page.locator('#input-review');

    // Boton para enviar resena
    this.reviewButton = page.locator('#button-review');

    // Seccion de resenas
    // Pestana de resenas de OpenCart
this.reviewTab = page.locator(
  'a[href="#tab-review"]'
);

    // Mensajes del sistema
    this.alertMessages = page.locator(
      '.alert, .text-danger'
    );
  }

  // Abrir catalogo de productos
  async visitarCatalogo(): Promise<void> {
    await this.page.goto(
      '/index.php?route=product/category&path=57'
    );
  }

  // Abrir producto mediante URL relativa
  async abrirProducto(ruta: string): Promise<void> {
    await this.page.goto(ruta);
  }

  // Buscar productos
  async buscarProducto(nombre: string): Promise<void> {
    await this.page.goto('/');

    await this.searchInput.fill(nombre);
    await this.searchInput.press('Enter');
  }

  // Abrir primer producto de resultados
  async abrirPrimerProducto(): Promise<void> {
    await expect(this.productLinks.first()).toBeVisible();

    await this.productLinks.first().click();
  }

// Abrir pestana de resenas
async abrirResenas(): Promise<void> {
  await expect(this.reviewTab).toBeVisible();

  await this.reviewTab.click();

  // Confirmar que el formulario esta disponible
  await expect(this.reviewNameInput).toBeVisible();
  await expect(this.reviewTextInput).toBeVisible();
}

  // Verificar formulario de resenas
  async verificarFormularioResena(): Promise<void> {
    await expect(this.reviewNameInput).toBeVisible();

    await expect(this.reviewTextInput).toBeVisible();
  }

  // Seleccionar calificacion de 1 a 5
  async seleccionarCalificacion(
    estrellas: number
  ): Promise<void> {
    if (
      !Number.isInteger(estrellas) ||
      estrellas < 1 ||
      estrellas > 5
    ) {
      throw new Error(
        'La calificacion debe ser entre 1 y 5'
      );
    }

    await this.page.locator(
      `input[name="rating"][value="${estrellas}"]`
    ).check();
  }

  // Completar formulario de resena
  async llenarResena(
    datos: DatosResena
  ): Promise<void> {
    await this.reviewNameInput.fill(datos.nombre);

    await this.reviewTextInput.fill(datos.comentario);

    await this.seleccionarCalificacion(
      datos.calificacion
    );
  }

  // Enviar resena
  async enviarResena(): Promise<void> {
    await this.reviewButton.click();
  }

  // Comprobar mensajes del sistema
  async verificarMensaje(
    mensaje: string | RegExp
  ): Promise<void> {
    await expect(
      this.alertMessages.filter({
        hasText: mensaje
      }).first()
    ).toBeVisible();
  }
}
