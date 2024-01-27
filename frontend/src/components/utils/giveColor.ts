import styles from "./variants.module.scss";

export function giveColor(variant: string) {
  switch (variant) {
    case "primary": {
      return styles.primary;
    }
    case "accept": {
      return styles.accept;
    }
    case "danger": {
      return styles.danger;
    }
    case "warn": {
      return styles.warn;
    }
    default: {
      return styles.primary;
    }
  }
}
