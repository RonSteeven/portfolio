import type { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    title: 'Berlin Canada',
    company: 'Vokal',
    description:
      'E-commerce and marketing site for "The World\'s Only Hybrid Packaging Supplier" — integrated packaging solutions combining supply and consulting services. Built with Next.js, MUI, and Bloomreach CMS, with a Storybook-driven component library and full Jest + Cypress coverage.',
    tags: ['Next.js', 'SASS', 'MUI', 'Bloomreach', 'Storybook', 'Jest', 'Cypress'],
    liveUrl: 'https://berlinpackaging.ca/',
  },
  {
    title: 'Parent Portal',
    company: 'Lightspeed Systems',
    description:
      "Web platform allowing districts, states, and schools to control students' internet access. Built with React, Redux, and GraphQL, hosted on AWS.",
    tags: ['React', 'Redux', 'GraphQL', 'Node.js', 'AWS', 'DynamoDB', 'SASS'],
    liveUrl: 'https://www.lightspeedsystems.com/security-compliance/lightspeed-parent-portal/',
  },
  {
    title: 'Classroom Management',
    company: 'Lightspeed Systems',
    description:
      'React-based SPA for classroom control — push vetted URLs, close distracting tabs, block websites, and enable screen sharing.',
    tags: ['React', 'Redux', 'GraphQL', 'SASS', 'SPA'],
    liveUrl: 'https://www.lightspeedsystems.com/products/lightspeed-classroom-management/',
  },
  {
    title: 'Neos Assembly Legal',
    company: 'BairesDev',
    description:
      'Software platform for legal firms to manage cases, intakes, documents, contacts, and clients with Microsoft Office integration.',
    tags: ['React', 'MobX', 'SASS', 'JavaScript', 'C#', 'Azure'],
    liveUrl: 'https://assemblysoftware.com/neos',
  },
  {
    title: 'Somos Uno',
    company: 'Hiberus',
    description:
      'Admin dashboard and mobile app for Corporación Favorita, built with React Hooks, Redux, and React Native.',
    tags: ['React', 'React Hooks', 'Redux', 'SASS', 'React Native', '.NET Core'],
    liveUrl: 'https://www.linkdigital.es/en/work/corporacion-favorita',
  },
  {
    title: 'Sebioca',
    company: 'ESPOL',
    description:
      'Full product control platform from inception to sale — React SPA with a C# .NET Core backend and React Native mobile app.',
    tags: ['React', 'Redux', 'TypeScript', 'SASS', 'React Native', 'C#', '.NET Core'],
    liveUrl: 'http://www.sebioca.espol.edu.ec/',
  },
];
