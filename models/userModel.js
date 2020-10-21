const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*const expenseSchema = new Schema({
  expense: String,
  value: Number
});*/

const budgetSchema = new Schema({
  earnings: Number,
  expenses: []
});

const userSchema = new Schema({
  username: String,
  name: String,
  googleId: String,
  budget: [budgetSchema]
});

const User = mongoose.model("user", userSchema);

module.exports = User;
