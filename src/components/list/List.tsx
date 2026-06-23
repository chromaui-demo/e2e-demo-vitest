import type { ComponentProps, FC } from "react";

import styles from "./list.module.scss";

interface Props extends ComponentProps<"ul"> {}

interface ListComponent extends FC<Props> {
  Item: typeof Item;
}

const List: ListComponent = ({ className, children, ...props }) => {
  return (
    <ul className={`${styles.list} ${className || ""}`} {...props}>
      {children}
    </ul>
  );
};

function Item({ children, className, ...props }: ComponentProps<"li">) {
  return (
    <li className={`${styles.item} ${className || ""}`} {...props}>
      {children}
    </li>
  );
}

List.Item = Item;
export { Item };
export default List;
