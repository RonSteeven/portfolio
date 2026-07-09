import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const ogSvg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0d0d14"/>
  <rect x="0" y="0" width="1200" height="4" fill="#9061f9"/>
  <text x="100" y="260" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="700" fill="#f3f4f6">Ronaldo Monserrate</text>
  <text x="100" y="330" font-family="system-ui, -apple-system, sans-serif" font-size="36" fill="#9061f9">Fullstack Developer</text>
  <text x="100" y="400" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#9ca3af">React · TypeScript · Node.js</text>
  <text x="100" y="550" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#9ca3af">ronsteeven.github.io/portfolio</text>
  <rect x="1060" y="200" width="60" height="60" rx="12" fill="#9061f9" opacity="0.15"/>
  <text x="1072" y="244" font-family="system-ui, sans-serif" font-size="36" fill="#9061f9">RM</text>
</svg>`;

const appleTouchSvg = `
<svg width="180" height="180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" rx="36" fill="#0d0d14"/>
  <text x="90" y="105" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="#9061f9">RM</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).png().toFile(join(publicDir, 'og-image.png'));
console.log('Generated og-image.png (1200x630)');

await sharp(Buffer.from(appleTouchSvg)).png().toFile(join(publicDir, 'apple-touch-icon.png'));
console.log('Generated apple-touch-icon.png (180x180)');
