import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {cloudflare} from '@cloudflare/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // TODO: See https://github.com/cloudflare/workers-sdk/issues/9379
    // Comment out to make the build work. Comment in to reproduce the problem.
    // If enabled, this will produce the following error:
    //   error during build:
    //   [@tailwindcss/vite:generate:build] Cannot create proxy with a non-object as
    //       target or handler
    //   file: [REDACTED]/cf-worker-repro/src/index.css
    cloudflare(),
  ],
});
