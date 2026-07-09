import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // Points to the Vite dev server for local runs
    baseUrl: 'http://localhost:5173/portfolio/',
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,         // disable in CI to save space; enable locally as needed
    screenshotOnRunFailure: true,
  },
});
