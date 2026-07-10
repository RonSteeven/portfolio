import type { SkillCategory } from '@/types';

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '</>',
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'SASS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'GraphQL', 'REST APIs', 'C#', '.NET Core'],
  },
  {
    title: 'Mobile',
    icon: '📱',
    skills: ['React Native', 'Redux', 'Formik', 'Yup'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'SQL Server'],
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    skills: ['Docker', 'AWS', 'Azure', 'GitHub Actions', 'Nginx', 'Linux'],
  },
  {
    title: 'Tools',
    icon: '🔧',
    skills: ['Git', 'Jest', 'React Testing Library', 'Storybook', 'Tanstack Query', 'MUI', 'Husky'],
  },
];
