import React from "react";

export const Item = ({ item, onDelete }) => {
  // Function to handle the deletion of an item
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/products/${item.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      onDelete(item.id);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="item">
      <img src={item.image} alt={item.name} />
      <label>{item.name}</label>
      <h3>£{item.price}</h3>
      <button onClick={handleDelete}>Delete Item</button>
      <button>Purchase</button>
    </div>
  );
};
