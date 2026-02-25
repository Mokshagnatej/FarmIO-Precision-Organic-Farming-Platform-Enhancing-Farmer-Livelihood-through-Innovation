#!/usr/bin/env node

import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  try {
    console.log('🌱 Starting FarmIO Development Server...');
    console.log('=====================================\n');

    const server = await createServer({
      configFile: false,
      root: path.resolve(__dirname, 'frontend'),
      plugins: [react()],
      server: {
        port: 5173,
        host: true,
        open: true,
        proxy: {
          '/api': {
            target: 'http://localhost:5000',
            changeOrigin: true
          }
        }
      },
      build: {
        outDir: path.resolve(__dirname, 'frontend/dist'),
        sourcemap: false
      }
    });

    await server.listen();

    server.printUrls();

    console.log('\n✅ Server is running!');
    console.log('📱 Open your browser to the URL above');
    console.log('🛑 Press Ctrl+C to stop the server\n');
  } catch (error) {
    console.error('❌ Error starting server:', error);
    process.exit(1);
  }
}

startServer();

