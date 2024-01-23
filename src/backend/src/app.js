const express = require('express');
const localRoutes = require('./routes/localRoutes');
const itemRoutes = require('./routes/itemRoutes');
const allocationRoutes = require('./routes/allocationRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const mechanicRoutes = require('./routes/mechanicRoutes');
const sequelize = require('../config/database');
const cors = require('cors');


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', localRoutes);
app.use('/api', itemRoutes);
app.use('/api', allocationRoutes);
app.use('/api', ticketRoutes);
app.use('/api', mechanicRoutes);

sequelize.sync().then(() => {
  console.log('Database and tables synced');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
