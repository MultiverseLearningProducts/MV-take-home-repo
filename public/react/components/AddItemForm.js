import React, { useState } from "react";
import "./styles.css";

function AddItemForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust this URL to your API endpoint
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const newItem = await response.json();
      onAddItem(newItem); // Callback to handle the new item in the parent component
      // Reset the form after successful submission
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="label">Name</label>
        <input
          className="input-field"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label className="label">Description</label>
        <textarea
          className="text-area"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label className="label">Price</label>
        <input
          className="input-field"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label className="label">Category</label>
        <input
          className="input-field"
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <label className="label">Image URL</label>
        <input
          className="input-field"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <button className="button" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItemForm;
