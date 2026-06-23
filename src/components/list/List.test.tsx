import { test, expect } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";
import List from "./List";

test("default", async () => {
  await render(
    <List>
      <List.Item>Item 1</List.Item>
      <List.Item>Item 2</List.Item>
      <List.Item>Item 3</List.Item>
    </List>,
  );

  await expect.element(page.getByRole("list")).toBeVisible();
  await expect.element(page.getByRole("listitem")).toHaveLength(3);
});
