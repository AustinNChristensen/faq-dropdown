import React from "react";
import { ListItem } from "./ListItem";
import { Data } from "./data";
export const List = () => {
  return Data.map(item => {
    return <ListItem key={item.title} title={item.title} text={item.text} />;
  });
};
