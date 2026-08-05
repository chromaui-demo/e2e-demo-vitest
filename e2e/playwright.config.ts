import { defineConfig } from "@playwright/test";
import { resolve } from "node:path";

export default defineConfig({
  testDir: import.meta.dirname,
  use: {
    baseURL: "http://localhost:6006",
    channel: "chrome",
  },
  webServer: {
    command: "pnpm archive-storybook --port 6006",
    port: 6006,
    cwd: resolve(import.meta.dirname, "../"),
    reuseExistingServer: !process.env.CI,
  },
});
