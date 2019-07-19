import React from "react";
import ReactDOM from "react-dom";
import { List } from "./List";
import { ListSingleOpen } from "./ListSingleOpen";
import styles from "./index.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <List />
      <h2 className={styles.title}>Alternative with single open at once</h2>
      <ListSingleOpen />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
