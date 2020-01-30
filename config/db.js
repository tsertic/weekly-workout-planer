const mongoose = require('mongoose');
const config = require('config');

const mongoURI = process.env.mongoURI || config.get('mongoURI');

const db = async () => {
  try {
    await mongoose.connect(mongoURI, {
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
