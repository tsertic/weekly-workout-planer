const mongoose = require('mongoose');
const config = require('config');

const db = async () => {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('Database connected');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = db;
