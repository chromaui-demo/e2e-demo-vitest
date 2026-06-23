import { test, expect } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";
import Table from "./Table";

test("default", async () => {
  await render(
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Header 1</Table.HeaderCell>
          <Table.HeaderCell>Header 2</Table.HeaderCell>
          <Table.HeaderCell>Header 3</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Row 1, Cell 1</Table.Cell>
          <Table.Cell>Row 1, Cell 2</Table.Cell>
          <Table.Cell>Row 1, Cell 3</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Row 2, Cell 1</Table.Cell>
          <Table.Cell>Row 2, Cell 2</Table.Cell>
          <Table.Cell>Row 2, Cell 3</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Row 3, Cell 1</Table.Cell>
          <Table.Cell>Row 3, Cell 2</Table.Cell>
          <Table.Cell>Row 3, Cell 3</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>,
  );

  await expect.element(page.getByRole("table")).toBeVisible();
  await expect.element(page.getByRole("row")).toHaveLength(4); // 1 header row + 3 body rows
  await expect.element(page.getByRole("columnheader")).toHaveLength(3);
  await expect.element(page.getByRole("cell")).toHaveLength(9);
});
