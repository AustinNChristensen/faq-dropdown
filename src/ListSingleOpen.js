import React, { useState } from "react";
import { ListItemSingleOpen } from "./ListItemSingleOpen";
import { Data } from "./data";
export const ListSingleOpen = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const newIndex = idx => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };
  return Data.map((item, idx) => {
    return (
      <ListItemSingleOpen
        key={item.title}
        open={openIndex === idx ? true : false}
        click={() => newIndex(idx)}
        title={item.title}
        text={item.text}
      />
    );
  });
};
