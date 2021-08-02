  
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    reactRefresh(),
    eslintPlugin({
      cache: false,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
    }),
  ],
  resolve: {
    alias: [{ find: '@/', replacement: '/src/' }],
  },
})