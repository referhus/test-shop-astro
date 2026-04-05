import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import { fileURLToPath } from 'node:url'
import { URL } from 'node:url'
import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

  adapter: netlify(),
})