const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Bank', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  amount: Number,
  category: String,
  vendor: String,
});

const transaction = mongoose.model('transaction', transactionSchema);

module.exports = transaction;