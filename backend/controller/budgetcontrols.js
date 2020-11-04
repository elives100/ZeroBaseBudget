const User = require("../models/userModel");

module.exports = {
  accessBudget: (req, res) => {
    res.status(200).send(req.user);
    console.log(req.session);
  },
  createBudget: async (req, res) => {
    try {
      const addBudget = await User.updateOne(
        { _id: req.body.id },
        {
          $set: {
            budget: {
              earnings: req.body.earnings,
              expenses: req.body.expenses,
            },
          },
        }
      );
      res.status(200).json(addBudget);
    } catch (error) {
      next(error);
    }
  },
  deleteBudget: async (req, res) => {
    try {
      const deleted = await User.updateOne(
        { _id: req.body.id },
        {
          $set: { budget: [] },
        }
      );
      res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  },
  updateBudget: async (req, res) => {
    console.log("request id", req.body.id);
    try {
      const changeBudget = await User.findOneAndUpdate(
        { _id: req.body.id },
        {
          $set: {
            budget: {
              earnings: req.body.earning,
              expenses: req.body.expense,
            },
          },
        },
        { upsert: true }
      );
      console.log("ChangeBudget", changeBudget);
      res.status(200).json(changeBudget);
    } catch (error) {
      next(error);
    }
  },
};
