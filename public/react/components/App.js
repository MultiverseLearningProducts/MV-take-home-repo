import React, { useState, useEffect } from "react";

import { ItemsList } from "./ItemsList";

import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";

import "./styles.css";

import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);

  const deleteItem = async (itemId) => {
    try {
      const response = await fetch(`${apiURL}/items/${itemId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Update items state to remove the deleted item
      setItems(items.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Function to fetch items data
  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();
      setItems(itemsData);
    } catch (err) {
      console.error("Error fetching items: ", err);
    }
  }

  // UseEffect hook to fetch data on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <div className="item-section">
        <h1>Items Store</h1>
        <h2>Available items</h2>
        <ItemsList items={items} />
      </div>
      <AddItemForm />
      <EditItemForm />
    </main>
  );
};
