import { defineConfig } from "vitest/config";

import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    include: ["**/*.test.{ts,tsx}"],
    css: true,
    coverage: {
      provider: "istanbul", // or 'v8'
    },
  },
});
