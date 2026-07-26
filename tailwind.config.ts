import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      fontSize: {
        // Responsive text scales: mobile first, then scale up on larger screens
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
        sm: ['clamp(0.875rem, 1.5vw, 0.875rem)', { lineHeight: '1.25rem' }], // 14px (mobile) → 14px
        base: ['clamp(1rem, 2vw, 1rem)', { lineHeight: '1.5rem' }], // 16px (mobile) → 16px
        lg: ['clamp(1.0625rem, 2.5vw, 1.125rem)', { lineHeight: '1.75rem' }], // 17px (mobile) → 18px
        xl: ['clamp(1.125rem, 3vw, 1.25rem)', { lineHeight: '1.75rem' }], // 18px (mobile) → 20px
        '2xl': ['clamp(1.25rem, 3.5vw, 1.5rem)', { lineHeight: '2rem' }], // 20px (mobile) → 24px
        '3xl': ['clamp(1.5rem, 4vw, 1.875rem)', { lineHeight: '2.25rem' }], // 24px (mobile) → 30px
        '4xl': ['clamp(1.875rem, 5vw, 2.25rem)', { lineHeight: '2.5rem' }], // 30px (mobile) → 36px
        '5xl': ['clamp(2.25rem, 6vw, 3rem)', { lineHeight: '1' }], // 36px (mobile) → 48px
      },
    },
  },
};

export default config;
