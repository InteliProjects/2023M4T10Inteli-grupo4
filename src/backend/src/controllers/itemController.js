const { Item } = require('../models');

const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findByPk(id);

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const createItem = async (req, res) => {
  const { id, name } = req.body;

  try {
    const newItem = await Item.create({
      id: id,
      name: name,
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const item = await Item.findByPk(id);

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    item.name = name || item.name;

    await item.save();

    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
}