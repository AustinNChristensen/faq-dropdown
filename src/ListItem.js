import React, { useState } from "react";
import { Icon } from "./Icon";
import styles from "./ListItem.module.scss";

export const ListItem = ({ title, text }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.flexCol}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
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
