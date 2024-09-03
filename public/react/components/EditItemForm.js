import React, { useState } from "react";
import "./styles.css";

function EditItemForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/items", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Reset form or handle success
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });
    } catch (error) {
      console.error("Error updating item:", error);
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
          placeholder="Name"
          required
        />

        <label className="label">Description</label>
        <textarea
          className="text-area"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />

        <label className="label">Price</label>
        <input
          className="input-field"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />

        <label className="label">Category</label>
        <input
          className="input-field"
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />

        <label className="label">Image URL</label>
        <input
          className="input-field"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <button className="button" type="submit">
          Edit Item
        </button>
      </form>
    </div>
  );
}

export default EditItemForm;
