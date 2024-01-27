import { ComponentProps } from "react";
import { giveColor } from "../utils/giveColor";
import styles from "./button.styles.module.scss";

type ButtonProps = {
  /**
   * The text inside button
   */
  readonly title: string;
  /**
   * To declare button's state(coloring)
   */
  readonly variant: "primary" | "accept" | "warn" | "danger" | "dark";
};

type ButtonComponentProps = ButtonProps & ComponentProps<"button">;

/**
 * Clickable component to catch user interaction
 */
export const Button: React.FC<ButtonComponentProps> = ({
  variant,
  title,
  ...props
}) => {
  return (
    <button className={`${styles.button} ${giveColor(variant)}`} {...props}>
      {title}
    </button>
  );
};
