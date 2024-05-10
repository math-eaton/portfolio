import { defineConfig } from 'vite'
import PurgeCSS from 'vite-plugin-purgecss';

export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
    plugins: [PurgeCSS(/* options */)],
  })