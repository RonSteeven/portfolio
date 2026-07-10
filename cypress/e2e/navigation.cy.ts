const SECTIONS = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];

describe('Navigation', () => {
  describe('desktop (1280px)', () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
      cy.visit('/');
    });

    it('scrolls to each section when its nav link is clicked', () => {
      // "Home" targets #hero; skip it because it's already in view.
      SECTIONS.slice(1).forEach(id => {
        const label = id.charAt(0).toUpperCase() + id.slice(1);
        cy.contains('nav button', label).click();
        cy.get(`#${id}`).should('be.visible');
      });
    });

    it('highlights the active nav link on scroll', () => {
      cy.contains('nav button', 'Projects').click();
      // IntersectionObserver updates on scroll; wait for it to settle.
      cy.contains('nav button', 'Projects', { timeout: 4000 })
        .should('have.class', 'text-[var(--color-nav-link-active)]');
    });
  });

  describe('mobile (375px)', () => {
    beforeEach(() => {
      cy.viewport(375, 812);
      cy.visit('/');
    });

    it('toggles the hamburger menu open and closed', () => {
      cy.get('[aria-label="Open menu"]').click();
      cy.get('[aria-label="Close menu"]').should('exist');
      cy.get('[aria-label="Close menu"]').click();
      cy.get('[aria-label="Open menu"]').should('exist');
    });

    it('navigates when a mobile menu link is clicked', () => {
      cy.get('[aria-label="Open menu"]').click();
      cy.get('nav ul').filter(':visible').contains('button', 'Projects').click();
      cy.get('#projects').should('be.visible');
    });
  });
});
