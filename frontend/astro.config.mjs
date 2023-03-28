import AstroPWA from '@vite-pwa/astro';
import astroI18next from 'astro-i18next';
import compress from "astro-compress";
import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import node from '@astrojs/node';
import partytown from "@astrojs/partytown";
import preact from "@astrojs/preact";
import prefetch from "@astrojs/prefetch";
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  integrations: [AstroPWA({
    mode: 'development',
    base: '/',
    scope: '/',
    includeAssets: ['favicon.svg'],
    registerType: 'autoUpdate',
    manifest: {
      name: '###WEBSITETITLE###',
      short_name: '###WEBSITETITLE###',
      theme_color: '#ffffff',
      icons: [{
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }]
    },
    workbox: {
      navigateFallback: '/404',
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
    }
  }), prefetch(), image(), astroI18next(), tailwind(), vue(), preact(), partytown(), compress()]
});