describe('GTranslate widget', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('mounts the .gtranslate_wrapper element', () => {
    cy.get('.gtranslate_wrapper').should('exist');
  });

  it('injects the GTranslate flags script into the document', () => {
    cy.get('script[src*="gtranslate.net/widgets/latest/flags.js"]').should('exist');
  });

  it('exposes the gtranslateSettings config with EN and ES', () => {
    cy.window().its('gtranslateSettings').should('deep.include', {
      default_language: 'en',
    });
    cy.window()
      .its('gtranslateSettings.languages')
      .should('include.members', ['en', 'es']);
  });
});
