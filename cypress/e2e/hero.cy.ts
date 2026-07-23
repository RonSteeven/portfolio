describe('Hero section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the name and title', () => {
    cy.get('#hero').within(() => {
      cy.contains("Hi there! I'm").should('be.visible');
      cy.contains("Ronaldo Monserrate").should('be.visible');
      cy.contains('Web Developer').should('be.visible');
    });
  });

  it('View Projects button scrolls to the Projects section', () => {
    cy.get('#hero').contains('button', 'View Projects').click();
    cy.get('#projects').should('be.visible');
  });

  it('Download CV button links to a valid CV URL', () => {
    cy.get('#hero')
      .contains('a', 'Download CV')
      .should('have.attr', 'href')
      .and('match', /^https?:\/\/|\.pdf$/);
  });
});
