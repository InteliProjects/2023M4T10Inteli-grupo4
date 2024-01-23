const { Ticket } = require('../models');

const getAllTickets = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const ticket = await Ticket.findByPk(id);
      if (!ticket) {
        return res.status(404).json({ error: 'Ticket not found' });
      }
      res.json(ticket);
    } else {
      const tickets = await Ticket.findAll();
      res.json(tickets);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getTicketById = async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findByPk(id);

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const createTicket = async (req, res) => {
  const { allocation_id, last_allocation_id, mechanic_id } = req.body;

  try {
    const newTicket = await Ticket.create({
      status: 'RUNNING',
      allocation_id: allocation_id,
      last_allocation_id: last_allocation_id,
      mechanic_id: mechanic_id,
    });

    res.status(201).json(newTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateTicket = async (req, res) => {
  const { id } = req.params;
  const { allocation_id, last_allocation_id, mechanic_id, status } = req.body;

  try {
    const ticket = await Ticket.findByPk(id);

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    ticket.allocation_id = allocation_id || ticket.allocation_id;
    ticket.last_allocation_id = last_allocation_id || ticket.last_allocation_id;
    ticket.mechanic_id = mechanic_id || ticket.mechanic_id;
    ticket.status = status || ticket.status;

    await ticket.save();

    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteTicket = async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findByPk(id);

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    await ticket.destroy();

    res.json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createTicket,
  getTicketById,
  updateTicket,
  getAllTickets,
  deleteTicket,
};
