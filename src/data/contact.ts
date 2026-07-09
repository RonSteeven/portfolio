import type { ContactLink } from '../types';

export const LOCATION = 'Ecuador';

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Email',
    value: 'ro_sml15@hotmail.com',
    href: 'mailto:ro_sml15@hotmail.com',
    icon: '✉️',
    isExternal: false,
  },
  {
    label: 'GitHub',
    value: 'RonaldoML',
    href: 'https://github.com/RonaldoML',
    icon: '🐙',
    isExternal: true,
  },
  {
    label: 'GitHub',
    value: 'RonSteeven',
    href: 'https://github.com/RonSteeven',
    icon: '🐙',
    isExternal: true,
  },
  {
    label: 'LinkedIn',
    value: 'Ronaldo Monserrate',
    href: 'https://www.linkedin.com/in/ronaldo-monserrate',
    icon: '💼',
    isExternal: true,
  },
];
