import React from "react";
import { Item } from "./Item";

export const ItemsList = ({ items }) => {
  return (
    <div className="container">
      {items.map((item, idx) => {
        return <Item item={item} key={idx} />;
      })}
    </div>
  );
};
