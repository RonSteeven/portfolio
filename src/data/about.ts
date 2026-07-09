import type { RoleCard } from '../types';

export const BIO = `I'm a Fullstack Developer with 7+ years of experience building production-grade web and mobile applications.
I've worked across startups and agencies — from MLReef and Applaudo to BairesDev and Vokal — shipping features that reach real users.
My stack is React + TypeScript on the frontend and Node.js on the backend, with a strong focus on clean architecture, DRY code, and tested, maintainable systems.
Recently I've been integrating AI into my daily workflow — pairing with Claude Code for feature development, code review, and refactoring, and connecting Notion via MCP to keep project planning, task tracking, and delivery in the same loop as the code.`;

export const ROLE_CARDS: RoleCard[] = [
  {
    title: 'Fullstack Developer',
    description: 'React, Node.js, TypeScript — from idea to production.',
    icon: '</>',
  },
  {
    title: 'Frontend Specialist',
    description: 'Component libraries, design systems, and pixel-perfect UIs.',
    icon: '🎨',
  },
  {
    title: 'Backend Engineer',
    description: 'REST APIs, GraphQL, microservices, and cloud deployments.',
    icon: '⚙️',
  },
];
