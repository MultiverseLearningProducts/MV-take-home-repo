const express = require("express");
const router = express.Router();
const { Items } = require("../models");

router.get("/", async (req, res) => {
  const items = await Items.findAll(); // node ./server/routes/products.js
  let ret = {
    items: [],
  };
  for (let item of items) {
    ret.items.push(item.dataValues);
  }

  res.status(200).json(ret);
});

router.get("/products/:id", async (req, res) => {
  const ret = await constructArray();
  let selectedItem = ret.items.find((e) => e.id === id);

  if (!selectedItem) {
    res.status(404).send({
      "Status Code": 404,
      Error: `An item with the ID of ${id} does not exist in the current DB!`,
    });
  } else {
    res.status(200).json(selectedItem);
  }
});

router.get("/items", async (req, res, next) => {
  const items = await Items.findAll();
  res.status(200).send(items);
});

// POST a new item
router.post("/items", async (req, res) => {
  try {
    const newItem = await Items.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/items/:id", async (req, res) => {
  try {
    const updatedItem = await Items.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(202).json(updatedItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE an item by ID
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findByPk(id);

    if (item) {
      await item.destroy();
      res.status(200).send("Item successfully deleted");
    } else {
      res.status(404).send("Item not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
