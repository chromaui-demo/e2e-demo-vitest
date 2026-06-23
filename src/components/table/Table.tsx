import type { ComponentProps, FC } from "react";

import styles from "./table.module.scss";

interface Props extends ComponentProps<"table"> {}

interface TableComponent extends FC<Props> {
  Row: typeof Row;
  Cell: typeof Cell;
  Header: typeof Header;
  HeaderCell: typeof HeaderCell;
  Body: typeof Body;
}

const Table: TableComponent = ({ children, className, ...props }) => {
  return (
    <table className={`${styles.table} ${className || ""}`} {...props}>
      {children}
    </table>
  );
};

function Body({ children, className, ...props }: ComponentProps<"tbody">) {
  return (
    <tbody className={`${styles.body} ${className || ""}`} {...props}>
      {children}
    </tbody>
  );
}

function Header({ children, className, ...props }: ComponentProps<"thead">) {
  return (
    <thead className={`${styles.header} ${className || ""}`} {...props}>
      {children}
    </thead>
  );
}

function HeaderCell({ children, className, ...props }: ComponentProps<"th">) {
  return (
    <th
      scope="col"
      className={`${styles.headerCell} ${className || ""}`}
      {...props}
    >
      {children}
    </th>
  );
}

function Row({ children, className, ...props }: ComponentProps<"tr">) {
  return (
    <tr className={`${styles.row} ${className || ""}`} {...props}>
      {children}
    </tr>
  );
}

function Cell({ children, className, ...props }: ComponentProps<"td">) {
  return (
    <td className={`${styles.cell} ${className || ""}`} {...props}>
      {children}
    </td>
  );
}

Table.Row = Row;
Table.Cell = Cell;
Table.Header = Header;
Table.HeaderCell = HeaderCell;
Table.Body = Body;
export { Row, Cell, Header, HeaderCell, Body };
export default Table;
