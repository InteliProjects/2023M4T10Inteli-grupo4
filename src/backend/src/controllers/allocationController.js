const { Allocation, Item, Local } = require('../models');

const getAllAllocations = async (req, res) => {
  try {
    /*
    allocations: local.Allocations.map((allocation) => ({
        item: {
          id: allocation.Item.id,
          name: allocation.Item.name,
          createdAt: allocation.Item.createdAt,
          updatedAt: allocation.Item.updatedAt,
        },
      }))
     */

    const allocations = await Allocation.findAll({
      include: [
        {
          model: Item,
          attributes: ['id', 'name'],
        },
        {
          model: Local,
          attributes: ['id', 'name', 'type'],
        },
      ],
    });

    res.json(allocations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllocationById = async (req, res) => {
  const { id } = req.params;

  try {
    const allocation = await Allocation.findByPk(id);

    if (!allocation) {
      return res.status(404).json({ error: 'Allocation not found' });
    }

    res.json(allocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const createAllocation = async (req, res) => {
  const { local_id, item_id } = req.body;

  try {
    const newAllocation = await Allocation.create({
      local_id,
      item_id,
    });

    res.status(201).json(newAllocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateAllocation = async (req, res) => {
  const { id } = req.params;
  const { local_id, item_id } = req.body;

  try {
    const allocation = await Allocation.findByPk(id);

    if (!allocation) {
      return res.status(404).json({ error: 'Allocation not found' });
    }

    allocation.local_id = local_id || allocation.local_id;
    allocation.item_id = item_id || allocation.item_id;

    await allocation.save();

    res.json(allocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllAllocationsForItem = async (req, res) => {
  const { item_id } = req.params;

  try {
    if (!item_id) {
      return res.status(400).json({ error: 'Item ID is required' });
    }

    const allocations = await Allocation.findAll({
      where: { item_id },
    });

    res.json(allocations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllAllocationsForLocal = async (req, res) => {
  const { local_id } = req.params;

  try {
    if (!local_id) {
      return res.status(400).json({ error: 'Local ID is required' });
    }

    const allocations = await Allocation.findAll({
      where: { local_id },
    });

    res.json(allocations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllAllocations,
  getAllocationById,
  createAllocation,
  updateAllocation,
  getAllAllocationsForItem,
  getAllAllocationsForLocal
};
