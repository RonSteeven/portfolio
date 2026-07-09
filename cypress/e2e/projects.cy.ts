const PROJECTS = [
  {
    title: 'Berlin Canada',
    url: 'https://berlinpackaging.ca/',
    tag: 'Next.js',
  },
  {
    title: 'Parent Portal',
    url: 'https://www.lightspeedsystems.com/security-compliance/lightspeed-parent-portal/',
    tag: 'React',
  },
  {
    title: 'Classroom Management',
    url: 'https://www.lightspeedsystems.com/products/lightspeed-classroom-management/',
    tag: 'Redux',
  },
  {
    title: 'Neos Assembly Legal',
    url: 'https://assemblysoftware.com/neos',
    tag: 'MobX',
  },
  {
    title: 'Somos Uno',
    url: 'https://www.linkdigital.es/en/work/corporacion-favorita',
    tag: 'React Native',
  },
  {
    title: 'Sebioca',
    url: 'http://www.sebioca.espol.edu.ec/',
    tag: 'TypeScript',
  },
];

describe('Projects section', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#projects').scrollIntoView();
  });

  it('renders every project card', () => {
    PROJECTS.forEach(project => {
      cy.get('#projects').contains(project.title).should('be.visible');
    });
  });

  it('each project has its correct live URL', () => {
    PROJECTS.forEach(project => {
      cy.get('#projects')
        .find(`a[href="${project.url}"]`)
        .should('exist')
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener noreferrer');
    });
  });

  it('shows tech tags on each project card', () => {
    PROJECTS.forEach(project => {
      cy.get('#projects').contains(project.tag).should('be.visible');
    });
  });
});
