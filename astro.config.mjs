import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/webscience-ai-battle',
  vite: {
    plugins: [tailwindcss()],
  },
});
