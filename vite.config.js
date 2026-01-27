import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/assets/js/panel/app.js',
        'resources/assets/js/frontend/frontend.js',
        'resources/assets/sass/panel/app.scss',
        'resources/assets/sass/frontend/app.scss',
        'resources/assets/sass/admin/app.scss',
      ],
      refresh: true,
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/assets/js/panel'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
});
