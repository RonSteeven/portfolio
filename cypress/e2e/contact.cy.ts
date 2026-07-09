describe('Contact section', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#contact').scrollIntoView();
  });

  it('shows the location', () => {
    cy.get('#contact').contains('Ecuador').should('be.visible');
  });

  it('email link uses the correct mailto', () => {
    cy.get('#contact')
      .contains('a', 'Email')
      .should('have.attr', 'href', 'mailto:ro_sml15@hotmail.com');
  });

  it('renders both GitHub profiles with correct hrefs', () => {
    cy.get('#contact').find('a[href="https://github.com/RonaldoML"]').should('exist');
    cy.get('#contact').find('a[href="https://github.com/RonSteeven"]').should('exist');
  });

  it('renders the LinkedIn link with the correct href', () => {
    cy.get('#contact')
      .find('a[href="https://www.linkedin.com/in/ronaldo-monserrate"]')
      .should('exist');
  });

  it('external links open in a new tab', () => {
    cy.get('#contact')
      .find('a[href^="https://"]')
      .each($el => {
        cy.wrap($el).should('have.attr', 'target', '_blank');
        cy.wrap($el).should('have.attr', 'rel', 'noopener noreferrer');
      });
  });
});
