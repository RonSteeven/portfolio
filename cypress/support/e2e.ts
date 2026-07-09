// Global Cypress setup — runs before every spec.

// Track console.error calls so specs can assert on them.
Cypress.on('window:before:load', win => {
  cy.stub(win.console, 'error').as('consoleError');
});

export {};
