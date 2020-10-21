const router = require("express").Router();
const BudController = require("../controller/budgetcontrols");

const checkAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401).send("You are not authenticated");
    console.log("not logged in");
  } else {
    return next();
  }
};

router.get("/", checkAuth, BudController.accessBudget);

router.post("/", BudController.createBudget);

router.post("/delete", BudController.deleteBudget);

router.put("/", BudController.updateBudget);

module.exports = router;
