/**
 * Smoke test — runs on every deploy.
 * Confirms the page loads, all 5 sections exist, and there are no JS errors.
 * Filled out in Phase 4 (Priority 36).
 */
describe('Portfolio smoke test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the homepage without errors', () => {
    cy.title().should('not.be.empty');
  });

  it('has all 5 section IDs in the DOM', () => {
    cy.get('#hero').should('exist');
    cy.get('#about').should('exist');
    cy.get('#skills').should('exist');
    cy.get('#projects').should('exist');
    cy.get('#contact').should('exist');
  });
});
