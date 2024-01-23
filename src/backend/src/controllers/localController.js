const { Local, Allocation, Item } = require('../models');

const getAllLocals = async (req, res) => {
  try {
    const locals = await Local.findAll({
      include: {
        model: Allocation,
        include: Item,
      },
    });

    const formattedLocals = locals.map((local) => ({
      id: local.id,
      name: local.name,
      type: local.type,
      allocations: local.Allocations.map((allocation) => ({
        item: {
          id: allocation.Item.id,
          name: allocation.Item.name,
          createdAt: allocation.Item.createdAt,
          updatedAt: allocation.Item.updatedAt,
        },
      })),
    }));

    res.json(formattedLocals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getLocalById = async (req, res) => {
  const { id } = req.params;

  try {
    const local = await Local.findByPk(id, {
      include: {
        model: Allocation,
        include: Item,
      },
    });

    const formattedLocal = {
      id: local.id,
      name: local.name,
      type: local.type,
      allocations: local.Allocations.map((allocation) => ({
        item: {
          id: allocation.Item.id,
          name: allocation.Item.name,
          createdAt: allocation.Item.createdAt,
          updatedAt: allocation.Item.updatedAt,
        },
      })),
    };

    if (!formattedLocal) {
      return res.status(404).json({ error: 'Local not found' });
    }

    res.json(formattedLocal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createLocal = async (req, res) => {
  const { id, name, type } = req.body;

  try {
    const newLocal = await Local.create({
      id: id,
      name: name,
      type: type,
    });

    res.status(201).json(newLocal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateLocal = async (req, res) => {
  const { id } = req.params;
  const { name, type } = req.body;

  try {
    const local = await Local.findByPk(id);

    if (!local) {
      return res.status(404).json({ error: 'Local not found' });
    }

    local.name = name || local.name;
    local.type = type || local.type;

    await local.save();

    res.json(local);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  getAllLocals,
  getLocalById,
  createLocal,
  updateLocal,
};