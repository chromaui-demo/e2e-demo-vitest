import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import react from "@vitejs/plugin-react";
import { chromaticPlugin } from "@chromatic-com/vitest/plugin";

export default defineConfig({
  plugins: [react(), chromaticPlugin()],

  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: "chromium" }],
      viewport: { width: 600, height: 400 },
      screenshotFailures: false,
    },
  },
});
