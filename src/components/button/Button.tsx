import { ComponentProps } from "react";

import styles from "./button.module.scss";

interface Props extends ComponentProps<"button"> {}

export default function Button({ className, children, ...props }: Props) {
  return (
    <button className={`${styles.button} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}
