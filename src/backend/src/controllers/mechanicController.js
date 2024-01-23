const { Mechanic } = require('../models');

const getAllMechanics = async (req, res) => {
  try {
    const mechanics = await Mechanic.findAll();
    res.json(mechanics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMechanicById = async (req, res) => {
  const { id } = req.params;

  try {
    const mechanic = await Mechanic.findByPk(id);

    if (!mechanic) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(mechanic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const createMechanic = async (req, res) => {
  const { name } = req.body;

  try {
    const newMechanic = await Mechanic.create({
      name,
    });

    res.status(201).json(newMechanic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateMechanic = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const mechanic = await Mechanic.findByPk(id);

    if (!mechanic) {
      return res.status(404).json({ error: 'Item not found' });
    }

    mechanic.name = name || mechanic.name;

    await mechanic.save();

    res.json(mechanic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllMechanics,
  getMechanicById,
  createMechanic,
  updateMechanic,
}