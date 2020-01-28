const express = require('express');
const app = express();
const db = require('./config/db');

//database
db();

app.use(express.json({ extended: false }));

//routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/workouts', require('./routes/workouts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server up and running on PORT:${PORT}`);
});
