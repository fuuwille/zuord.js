import path from 'path';
import { defineConfig } from 'vitest/config.js';

export default defineConfig({
        resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    test: {
        globals: true,
        environment: 'node',
        include: ['tests/**/*.test.ts', 'tests/**/*.spec.ts'],
        watch: false,
        testTimeout: 20000
    }
});
