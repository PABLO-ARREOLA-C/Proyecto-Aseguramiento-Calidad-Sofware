import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30_000,

  expect: {
    timeout: 10_000,
  },

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: 1,

  workers: 2,

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'reportes/html',
      open: 'never',
    }],
  ],

  use: {
   baseURL: 'https://opencart.abstracta.us/',

    trace: 'retain-on-failure',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    actionTimeout: 10_000,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
  ],

  outputDir: 'reportes/test-results',
});
