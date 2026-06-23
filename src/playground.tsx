import type { PropsWithChildren } from "react";
import { createRoot } from "react-dom/client";

import Button from "./components/button";
import List from "./components/list";
import Table from "./components/table";

function Playground() {
  return (
    <>
      <Box>
        <Button>Example</Button>
      </Box>

      <Box>
        <List>
          <List.Item>Item 1</List.Item>
          <List.Item>Item 2</List.Item>
          <List.Item>Item 3</List.Item>
        </List>
      </Box>

      <Box>
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
        </Table>
      </Box>
    </>
  );
}

function Box(props: PropsWithChildren<{}>) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      {props.children}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<Playground />);
