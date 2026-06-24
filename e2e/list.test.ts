import { test, expect } from "@playwright/test";

test("default / Snapshot #1", async ({ page }) => {
  await page.goto("/?path=/story/src-components-list-list--default-snapshot-1");

  const iframe = page.frameLocator("iframe[title='storybook-preview-iframe']");
  await expect(iframe.getByRole("list")).toBeVisible();
  await expect(iframe.getByRole("listitem")).toHaveCount(3);
});
