import { test, expect } from "@playwright/test";

test("default / Snapshot #1", async ({ page }) => {
  await page.goto(
    "/?path=/story/src-components-button-button--default-snapshot-1",
  );

  const iframe = page.frameLocator("iframe[title='storybook-preview-iframe']");
  await expect(iframe.getByRole("button", { name: "Submit" })).toBeVisible();
});

test("hover / Snapshot #1", async ({ page }) => {
  await page.goto(
    "/?path=/story/src-components-button-button--hover-snapshot-1",
  );

  const iframe = page.frameLocator("iframe[title='storybook-preview-iframe']");
  await expect(iframe.getByRole("button", { name: "Submit" })).toBeVisible();
});

test("many states / Default", async ({ page }) => {
  await page.goto(
    "/?path=/story/src-components-button-button--many-states-default",
  );

  const iframe = page.frameLocator("iframe[title='storybook-preview-iframe']");
  await expect(iframe.getByRole("button", { name: "Default" })).toBeVisible();
  await expect(iframe.getByRole("button", { name: "Testing" })).toBeVisible();
});

test("many states / Hover", async ({ page }) => {
  await page.goto(
    "/?path=/story/src-components-button-button--many-states-hover",
  );

  const iframe = page.frameLocator("iframe[title='storybook-preview-iframe']");
  await expect(iframe.getByRole("button", { name: "Default" })).toBeVisible();
  await expect(iframe.getByRole("button", { name: "Testing" })).toBeVisible();
});

test("many states / focus-visible", async ({ page }) => {
  await page.goto(
    "/?path=/story/src-components-button-button--many-states-focus-visible",
  );

  const iframe = page.frameLocator("iframe[title='storybook-preview-iframe']");
  await expect(iframe.getByRole("button", { name: "Default" })).toBeVisible();
  await expect(iframe.getByRole("button", { name: "Testing" })).toBeVisible();
});
