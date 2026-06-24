import { test, expect } from "@playwright/test";

test("default / Snapshot #1", async ({ page }) => {
  await page.goto(
    "/?path=/story/src-components-table-table--default-snapshot-1",
  );

  const iframe = page.frameLocator("iframe[title='storybook-preview-iframe']");

  await expect(iframe.getByRole("table")).toBeVisible();
  await expect(iframe.getByRole("row")).toHaveCount(4); // 1 header row + 3 body rows
  await expect(iframe.getByRole("columnheader")).toHaveCount(3);
  await expect(iframe.getByRole("cell")).toHaveCount(9);
});
