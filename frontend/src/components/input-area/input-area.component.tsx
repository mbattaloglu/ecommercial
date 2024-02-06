import { ComponentProps } from "react";
import styles from "./input-area.styles.module.scss";

type InputAreaProps = {
  readonly title: string;
};

type InputComponentProps = InputAreaProps & ComponentProps<"input">;

export const InputArea: React.FC<InputComponentProps> = ({
  title,
  ...props
}) => {
  return (
    <label htmlFor={props.id} className={styles["input-container"]}>
      <input placeholder={title} {...props} className={styles["input"]} />
    </label>
  );
};
