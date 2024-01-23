const Local = require('./local')
const Item = require('./item');
const Allocation = require('./allocation');
const Ticket = require('./tickets')
const Mechanic = require('./mechanic')

Local.hasMany(Allocation, { foreignKey: 'local_id' });

Item.hasOne(Allocation, { foreignKey: 'item_id' });

Allocation.belongsTo(Local, { foreignKey: 'local_id' });
Allocation.belongsTo(Item, { foreignKey: 'item_id' });

module.exports = {
  Local,
  Item,
  Allocation,
  Ticket,
  Mechanic,
};