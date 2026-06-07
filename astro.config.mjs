// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // 👈 Native Tailwind v4 compiler

// https://astro.build/config
export default defineConfig({
  site: 'https://IgalKroif.github.io',
  base: '/IgalKroifQaSite',
  vite: {
    plugins: [tailwindcss()], // 👈 Intercepts CSS compilation and injects Tailwind utility classes
  },
});