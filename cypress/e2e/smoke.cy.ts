describe('Portfolio smoke test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the homepage with the correct title', () => {
    cy.title().should('eq', 'Ronaldo Monserrate — Fullstack Developer');
  });

  it('has all section IDs in the DOM', () => {
    cy.get('#hero').should('exist');
    cy.get('#about').should('exist');
    cy.get('#experience').should('exist');
    cy.get('#skills').should('exist');
    cy.get('#projects').should('exist');
    cy.get('#contact').should('exist');
  });

  it('emits no console errors on load', () => {
    cy.get('@consoleError').should('not.have.been.called');
  });
});
