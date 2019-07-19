import React from "react";
import { Icon } from "./Icon";
import styles from "./ListItem.module.scss";

export const ListItemSingleOpen = ({ title, text, open, click }) => {
  return (
    <>
      <div className={styles.flexCol}>
        <button className={styles.button} onClick={() => click()}>
          <span className={`${styles.icon} ${open ? styles.open : ""}`}>
            <Icon />
          </span>
          <h3 className={styles.title}>{title}</h3>
        </button>
        {open ? <p className={styles.text}>{text}</p> : null}
      </div>
    </>
  );
};
